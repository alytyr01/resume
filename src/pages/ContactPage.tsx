import { Navbar, Footer } from '@/components/home';
import { Crown, Sparkles, Layout, Palette, Briefcase, FileText, GraduationCap, Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

// Security: Allowed subject values whitelist
const ALLOWED_SUBJECTS = [
  'General Inquiry',
  'Resume Template Question',
  'Technical Support',
  'Partnership Opportunity',
  'Other',
] as const;

// Security: Maximum field lengths to prevent abuse
const MAX_LENGTHS = {
  firstName: 50,
  lastName: 50,
  email: 254,
  subject: 100,
  message: 5000,
} as const;

// Security: Rate limiting - minimum 3 seconds between submissions
const MIN_SUBMIT_INTERVAL = 3000;

// Security: Strip potentially dangerous HTML/script tags
function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>]/g, '')     // Remove remaining angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '')     // Remove event handlers
    .replace(/data:/gi, '')      // Remove data: protocol
    .trim();
}

// Security: Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

// Validate form data with detailed error messages
function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  // First Name validation
  const firstName = sanitize(data.firstName);
  if (!firstName || firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  } else if (firstName.length > MAX_LENGTHS.firstName) {
    errors.firstName = `First name must be under ${MAX_LENGTHS.firstName} characters`;
  } else if (!/^[a-zA-Z\s'-]+$/.test(firstName)) {
    errors.firstName = 'First name contains invalid characters';
  }

  // Last Name validation
  const lastName = sanitize(data.lastName);
  if (!lastName || lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  } else if (lastName.length > MAX_LENGTHS.lastName) {
    errors.lastName = `Last name must be under ${MAX_LENGTHS.lastName} characters`;
  } else if (!/^[a-zA-Z\s'-]+$/.test(lastName)) {
    errors.lastName = 'Last name contains invalid characters';
  }

  // Email validation
  const email = sanitize(data.email).toLowerCase();
  if (!email) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address';
  } else if (email.length > MAX_LENGTHS.email) {
    errors.email = `Email must be under ${MAX_LENGTHS.email} characters`;
  }

  // Subject validation (whitelist approach)
  const subject = sanitize(data.subject);
  if (!subject) {
    errors.subject = 'Please select a subject';
  } else if (!ALLOWED_SUBJECTS.includes(subject as typeof ALLOWED_SUBJECTS[number])) {
    errors.subject = 'Invalid subject selected';
  }

  // Message validation
  const message = sanitize(data.message);
  if (!message || message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (message.length > MAX_LENGTHS.message) {
    errors.message = `Message must be under ${MAX_LENGTHS.message} characters`;
  }

  return errors;
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState<string>('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const lastSubmitTime = useRef<number>(0);
  const formRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Security: Track time on page (basic bot detection)
  const [pageLoadTime] = useState<number>(Date.now());

  const isMobile = windowWidth < 640;

  const handleInputChange = (field: keyof FormData, value: string) => {
    // Limit input length at the input level
    if (value.length > MAX_LENGTHS[field]) return;
    
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Security: Check if form was submitted too quickly (bot detection)
    const now = Date.now();
    if (now - pageLoadTime < 1000) {
      setSubmitError('Please wait before submitting the form');
      setSubmitStatus('error');
      return;
    }

    // Security: Rate limiting check
    if (now - lastSubmitTime.current < MIN_SUBMIT_INTERVAL) {
      setSubmitError('Please wait a moment before submitting again');
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    // Validate all fields
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitStatus('submitting');
    setSubmitError('');

    try {
      // Sanitize all inputs before submission
      // Note: Database-level validation is also enforced via CHECK constraints
      const cleanData = {
        first_name: sanitize(formData.firstName),
        last_name: sanitize(formData.lastName),
        email: sanitize(formData.email).toLowerCase(),
        subject: sanitize(formData.subject),
        message: sanitize(formData.message),
      };

      const { error } = await supabase
        .from('contact_messages')
        .insert([cleanData]);

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        });
        throw new Error(error.message || 'Failed to send message. Please try again later.');
      }

      setSubmitStatus('success');
      setShowSuccessModal(true);
      lastSubmitTime.current = now;

      // Reset form after success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });

    } catch (err) {
      console.error('Submit error:', err);
      setSubmitError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setSubmitStatus('error');
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitError('');
      }, 5000);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setSubmitStatus('idle');
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      fontFamily: 'sans-serif',
      background: '#F8F9FA',
      color: '#111827',
      minHeight: '100vh',
      paddingTop: 100,
    }}>
      <Navbar dropdowns={{
        templates: [
          { href: `/templates/modern`, icon: <Sparkles style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Modern', description: 'Clean, modern design' },
          { href: `/templates/minimal`, icon: <Palette style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Minimal', description: 'Simple, elegant layout' },
          { href: `/templates/professional`, icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Professional', description: 'Corporate, formal style' },
          { href: `/templates/ats`, icon: <FileText style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'ATS', description: 'Optimized for screening' },
          { href: `/templates/creative`, icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Creative', description: 'Bold, eye-catching look' },
          { href: `/templates/premium`, icon: <Crown style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Premium', description: 'Most popular choice' },
        ],
        examples: [
          { href: '/career-levels/entry', icon: <GraduationCap style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Entry Level', description: 'Recent graduates' },
          { href: '/career-levels/mid', icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Mid Career', description: '5+ years experience' },
          { href: '/career-levels/executive', icon: <Crown style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Executive', description: 'Senior leadership' },
        ],
      }} />

      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
        padding: '80px 96px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: 800,
          marginBottom: 16,
          color: '#0f172a',
        }}>Contact Us</h1>
        <p style={{
          fontSize: 18,
          lineHeight: 1.6,
          color: '#475569',
          maxWidth: 600,
          margin: '0 auto',
        }}>
          Have questions about our resume templates or need help with your career journey? We're here to help.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div style={{
        padding: isMobile ? '40px 24px 60px' : '60px 96px',
        background: '#fff',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 24,
          maxWidth: isMobile ? 400 : 1200,
          margin: '0 auto',
          width: '100%',
          alignItems: 'stretch',
        }}>
          <div style={{
            background: '#F8F9FA',
            padding: 32,
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            textAlign: 'center',
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: '#F5F3FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <Mail size={28} color="#8B5CF6" />
            </div>
            <h3 style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: 8,
            }}>Email Us</h3>
            <p style={{
              fontSize: 16,
              color: '#475569',
              lineHeight: 1.6,
              margin: 0,
            }}>
              support@resumebuilder.com<br />
              We respond within 24 hours
            </p>
          </div>

          <div style={{
            background: '#F8F9FA',
            padding: 32,
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            textAlign: 'center',
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: '#F5F3FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <Phone size={28} color="#8B5CF6" />
            </div>
            <h3 style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: 8,
            }}>Call Us</h3>
            <p style={{
              fontSize: 16,
              color: '#475569',
              lineHeight: 1.6,
              margin: 0,
            }}>
              +1 (555) 123-4567<br />
              Mon-Fri 9am-6pm EST
            </p>
          </div>

          <div style={{
            background: '#F8F9FA',
            padding: 32,
            borderRadius: 16,
            border: '1px solid #E2E8F0',
            textAlign: 'center',
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: '#F5F3FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <MapPin size={28} color="#8B5CF6" />
            </div>
            <h3 style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: 8,
            }}>Visit Us</h3>
            <p style={{
              fontSize: 16,
              color: '#475569',
              lineHeight: 1.6,
              margin: 0,
            }}>
              123 Career Street, Suite 200<br />
              New York, NY 10001
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div ref={formRef} className="contact-form-section" style={{
        padding: isMobile ? '40px 24px 60px' : '60px 96px 80px',
        background: '#F8F9FA',
      }}>
        <div style={{
          maxWidth: 800,
          margin: '0 auto',
          background: '#fff',
          padding: 48,
          borderRadius: 20,
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}>
          <h2 style={{
            fontSize: 28,
            fontWeight: 700,
            color: '#0f172a',
            marginBottom: 8,
          }}>Send Us a Message</h2>
          <p style={{
            fontSize: 16,
            color: '#475569',
            marginBottom: 32,
            lineHeight: 1.6,
          }}>
            Fill out the form below and we'll get back to you as soon as possible. All fields are required.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-name-grid" style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: 20,
              marginBottom: 20,
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#334155',
                  marginBottom: 6,
                }}>First Name <span style={{ color: '#EF4444' }}>*</span></label>
                <input
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  maxLength={MAX_LENGTHS.firstName}
                  autoComplete="given-name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: 15,
                    border: `1px solid ${errors.firstName ? '#EF4444' : '#E2E8F0'}`,
                    borderRadius: 8,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'sans-serif',
                    transition: 'border-color 0.2s',
                  }}
                />
                {errors.firstName && (
                  <p style={{ color: '#EF4444', fontSize: 13, margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <AlertCircle size={14} />
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#334155',
                  marginBottom: 6,
                }}>Last Name <span style={{ color: '#EF4444' }}>*</span></label>
                <input
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  maxLength={MAX_LENGTHS.lastName}
                  autoComplete="family-name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: 15,
                    border: `1px solid ${errors.lastName ? '#EF4444' : '#E2E8F0'}`,
                    borderRadius: 8,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'sans-serif',
                    transition: 'border-color 0.2s',
                  }}
                />
                {errors.lastName && (
                  <p style={{ color: '#EF4444', fontSize: 13, margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <AlertCircle size={14} />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                color: '#334155',
                marginBottom: 6,
              }}>Email Address <span style={{ color: '#EF4444' }}>*</span></label>
              <input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                maxLength={MAX_LENGTHS.email}
                autoComplete="email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: 15,
                  border: `1px solid ${errors.email ? '#EF4444' : '#E2E8F0'}`,
                  borderRadius: 8,
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'sans-serif',
                  transition: 'border-color 0.2s',
                }}
              />
              {errors.email && (
                <p style={{ color: '#EF4444', fontSize: 13, margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <AlertCircle size={14} />
                  {errors.email}
                </p>
              )}
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                color: '#334155',
                marginBottom: 6,
              }}>Subject <span style={{ color: '#EF4444' }}>*</span></label>
              <select
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: 15,
                  border: `1px solid ${errors.subject ? '#EF4444' : '#E2E8F0'}`,
                  borderRadius: 8,
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'sans-serif',
                  background: '#fff',
                  color: '#334155',
                  transition: 'border-color 0.2s',
                }}
              >
                {ALLOWED_SUBJECTS.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              {errors.subject && (
                <p style={{ color: '#EF4444', fontSize: 13, margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <AlertCircle size={14} />
                  {errors.subject}
                </p>
              )}
            </div>

            <div style={{ marginBottom: 28 }}>
              <label style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                color: '#334155',
                marginBottom: 6,
              }}>Message <span style={{ color: '#EF4444' }}>*</span></label>
              <textarea
                placeholder="Tell us how we can help you..."
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                maxLength={MAX_LENGTHS.message}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: 15,
                  border: `1px solid ${errors.message ? '#EF4444' : '#E2E8F0'}`,
                  borderRadius: 8,
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'sans-serif',
                  resize: 'vertical',
                  transition: 'border-color 0.2s',
                }}
              />
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 4,
              }}>
                {errors.message ? (
                  <p style={{ color: '#EF4444', fontSize: 13, margin: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                ) : <span />}
                <span style={{
                  fontSize: 12,
                  color: formData.message.length > MAX_LENGTHS.message * 0.9 ? '#EF4444' : '#94A3B8',
                }}>
                  {formData.message.length}/{MAX_LENGTHS.message}
                </span>
              </div>
            </div>

            {submitStatus === 'error' && submitError && (
              <div style={{
                background: '#FEF2F2',
                border: '1px solid #FECACA',
                borderRadius: 8,
                padding: '12px 16px',
                marginBottom: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: '#DC2626',
                fontSize: 14,
              }}>
                <AlertCircle size={18} />
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 32px',
                fontSize: 16,
                fontWeight: 600,
                color: '#fff',
                background: submitStatus === 'submitting' ? '#94A3B8' : '#0f172a',
                border: 'none',
                borderRadius: 8,
                cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer',
                fontFamily: 'sans-serif',
                transition: 'background 0.2s',
                opacity: submitStatus === 'submitting' ? 0.7 : 1,
              }}
            >
              {submitStatus === 'submitting' ? (
                <>Sending...</>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          <div
            onClick={handleCloseSuccessModal}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              maxWidth: 440,
              background: '#ffffff',
              borderRadius: 20,
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              padding: '48px 40px',
              textAlign: 'center',
              animation: 'modalFadeIn 0.3s ease-out',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
              <div style={{
                animation: 'checkBounce 0.5s ease-out',
              }}>
                <CheckCircle size={64} color="#10B981" />
              </div>
            </div>
            <h2 style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#0f172a',
              margin: '0 0 12px',
            }}>Message Sent Successfully!</h2>
            <p style={{
              fontSize: 16,
              color: '#475569',
              lineHeight: 1.6,
              margin: '0 0 28px',
            }}>
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={handleCloseSuccessModal}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 32px',
                fontSize: 16,
                fontWeight: 600,
                color: '#fff',
                background: '#0f172a',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                fontFamily: 'sans-serif',
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes checkBounce {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes modalFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .form-name-grid {
          grid-template-columns: 1fr !important;
        }
        .contact-form-section {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
        @media (max-width: 640px) {
          .contact-form-section {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .contact-form-section > div {
            padding: 24px !important;
          }
        }
      `}</style>

      <Footer />
    </div>
  );
}