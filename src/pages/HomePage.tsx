import { useState, useEffect } from 'react';
import { Layout, FileText, Briefcase, Target, Palette, Crown, Star, ArrowRight, BookOpen, Users, Edit3, Layers, FileOutput, Search, ThumbsUp, Zap, Globe, Download } from 'lucide-react';
import { Navbar, HeroSection, Footer } from '@/components/home';

const dropdowns = {
  templates: [
    { href: '/templates/modern', icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Modern', description: 'Clean, modern design' },
    { href: '/templates/minimal', icon: <FileText style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Minimal', description: 'Simple, elegant layout' },
    { href: '/templates/professional', icon: <Briefcase style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Professional', description: 'Corporate, formal style' },
    { href: '/templates/ats', icon: <Target style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'ATS', description: 'Optimized for screening' },
    { href: '/templates/creative', icon: <Palette style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Creative', description: 'Bold, eye-catching look' },
    { href: '/templates/premium', icon: <Crown style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Premium', description: 'Most popular choice' },
  ],
  examples: [
    { href: '/career-levels/entry', icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Entry Level', description: 'Recent graduates' },
    { href: '/career-levels/mid', icon: <Layout style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Mid Career', description: '5+ years experience' },
    { href: '/career-levels/executive', icon: <Star style={{ width: 40, height: 40, color: '#64748b', marginTop: 2 }} />, title: 'Executive', description: 'Senior leadership' },
  ],
};

export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [startHover, setStartHover] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
      <div style={{
        fontFamily: 'sans-serif',
        background: '#F8F9FA',
        color: '#111827',
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
        paddingTop: 'clamp(70px, 12vw, 100px)',
        width: '100%',
        maxWidth: '100%',
      }}>
      <Navbar dropdowns={dropdowns} />
      <div className={isVisible ? "hero-animate" : ""}>
        <HeroSection onStartHover={setStartHover} startHover={startHover} />
      </div>

      {/* Create a resume section */}
      <section className="home-section" style={{ background: '#fff', marginTop: 'clamp(24px, 5vw, 40px)' }}>
        <div style={{ width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(24px, 5vw, 48px)', fontWeight: 700, color: '#0f172a', marginBottom: 16, lineHeight: 1.3, textAlign: 'left' }}>
            Create a resume to land your next job
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 17px)', color: '#475569', marginBottom: 24, lineHeight: 1.6, maxWidth: 'min(900px, 100%)' }}>
            We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.
          </p>

          <div className="home-grid grid-4">
            {[
              { icon: Zap, title: 'Powerful and easy-to-use', desc: 'Created to be suitable for all levels of job seekers. Our host of powerful features ranges from an excellent spell-checker, to job tracking, multi-format export, auto-generated summaries and more.' },
              { icon: Edit3, title: 'Customization made simple', desc: 'Fine-tune your resume for a specific job with ease. We help you turn a generic document into a cutting-edge instrument that wins interviews. Transform universal resumes into perfect sales pitches with a few key-strokes.' },
              { icon: Layers, title: 'Templates designed by experts', desc: 'Our designed templates and examples are reviewed by recruiters. This gives you a powerful boost in resume creation, straight from the other side of the job market — the people responsible for hiring and candidate evaluation.' },
              { icon: ThumbsUp, title: 'Proven resume templates', desc: 'The resume templates included in our resume builder have been approved by seasoned recruiters. Capturing the recruiters\' attention is the first step towards getting hired.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'left' }}>
                <div className="icon-circle" style={{ background: '#F5F3FF' }}>
                  <item.icon size={24} color="#64748b" />
                </div>
                <h3 style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: '#0f172a', marginBottom: 6, lineHeight: 1.4 }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#475569', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustpilot rating */}
      <section className="home-section" style={{ background: '#F8F9FA', textAlign: 'center' }}>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 12 }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <div style={{ fontSize: 'clamp(24px, 6vw, 48px)', fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>4.2 out of 5</div>
          <p style={{ fontSize: 'clamp(13px, 1.5vw, 16px)', color: '#64748b', margin: '0 0 24px' }}>based on 55,859 reviews on Trustpilot</p>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 42px)', fontWeight: 700, color: '#0f172a', marginBottom: 16, lineHeight: 1.3, textAlign: 'center' }}>
            Why our customers love our resume builder
          </h2>
          <p style={{ fontSize: 'clamp(13px, 2vw, 18px)', color: '#475569', lineHeight: 1.7, maxWidth: 'min(800px, 100%)', margin: '0 auto' }}>
            Resume.io's online builder tool and collection of elegant, recruiter-tested templates are used by more than 10 million people around the globe! We are incredibly proud to empower so many active professionals.
          </p>
        </div>
      </section>

      {/* Feature details grid */}
      <section className="home-section" style={{ background: '#fff' }}>
        <div style={{ width: '100%' }}>
          <div className="home-grid grid-2">
            {[
              { icon: Edit3, title: 'Edit and customize online', desc: 'Customize resumes in a few clicks with no additional software. Cloud and offline syncing save your changes (even if you lose your internet connection) and allow you to stay creative and organized. A host of functions provide you with additional options and safety. Data protection, a great interface and other features make resume creation a breeze!' },
              { icon: FileOutput, title: 'Pre-generated resume content', desc: 'Make your life easier with automatic summary generation, AI pre-written phrases, optimized resume formatting and beautiful visuals. With the support of our experts and automated tools, you can forget about writer\'s block in resume writing. Streamline the process with resume.io as your trusted helper!' },
              { icon: Download, title: 'Export to multiple file formats', desc: 'Make use of PDF files to perfectly preserve your beautiful formatting. Export into Word files if your target employer has that requirement. Applicant tracking systems, hiring managers, recruiters and corporate rules may require you to submit your resume in different file formats. That\'s why we\'ve included multi-format export in our free resume builder functionality.' },
              { icon: Search, title: 'Job tracker and job search', desc: 'Using Resume.io you can search for jobs and wishlist job openings you\'d like to apply for in the future, track jobs you already applied for, save jobs that you interviewed for (or have an interview scheduled), review job offers you received and even analyze possible mistakes in your "rejected" category. The full range of options is here for you.' },
              { icon: Users, title: 'Reviewed by the community. Trusted by professionals', desc: '4.2 out of 5 based on 55,859 reviews' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div className="icon-circle" style={{ width: 40, height: 40, borderRadius: 10, background: '#F5F3FF', flexShrink: 0 }}>
                  <item.icon size={20} color="#64748b" />
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: 700, color: '#0f172a', marginBottom: 4, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#475569', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to build a resume */}
      <section className="home-section" style={{ background: '#F8F9FA' }}>
        <div style={{ width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 42px)', fontWeight: 700, color: '#0f172a', marginBottom: 16, lineHeight: 1.3, textAlign: 'center' }}>
            How to build a resume
          </h2>
          <p style={{ fontSize: 'clamp(13px, 2vw, 18px)', color: '#475569', marginBottom: 24, maxWidth: 'min(800px, 100%)', lineHeight: 1.6, margin: '0 auto 24px' }}>
            The resume building process is simple and intuitive: Five easy steps is all it takes to get from start to finish. Resume writing can be time-consuming. So, our resume tools and guides are designed to save as much of your time as possible.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { step: '1', title: 'Begin with choosing a template', desc: 'Find one of our elegant, expertly crafted templates that suit your taste, profession and employer\'s image. Choose an accent color to grab the reader\'s attention. We have several resume template categories to choose from, depending on your sensibilities, visual demands and industry. All of the templates balance visual and technical design, making sure your formatting is as great as your aesthetics.' },
              { step: '2', title: 'Add your personal info', desc: 'Fill in your contact information so that your resume performs as your personal ambassador. Never worry about it getting lost among other candidates, as our powerful, attention-grabbing headers help recruiters visually identify your document among many others. Our free resume builder provides encrypted data protection to ensure your privacy and the safety of your information. Your data is seen only by the people you share it with.' },
              { step: '3', title: 'Fill in the sections', desc: 'Write or generate a short summary, fill in the bullet points of your employment history, education and skills. We\'ll help you with great visual functions and tips. All of the sections are easy to complete and require minimal effort. Compared to traditional text editing software, resume creation with our builder is easy and convenient. Save time, make use of powerful visualizations and clean formatting!' },
              { step: '4', title: 'Customize the layout', desc: 'Custom-tailor the design and structure of your resume in just a few clicks. You can also add any special sections if you want or need them. Awards? Certifications? Honors? If you have them, we\'ll help you list them. Font sizes and colors are customizable as well. Our templates require almost no changes, but we provide you with the freedom to edit if needed. Review the result and decide whether you\'re satisfied.' },
              { step: '5', title: 'Download in multiple file formats', desc: 'Resume.io provides PDF or Word exports, depending on your needs and the demands of the employer. You can also share your resume directly online. Now, you\'re ready to build your cover letter, search and apply for jobs using our job tracker, the listing service of your choice and send it directly to your employer / hiring contact. That\'s it. Just easy editing, beautiful design and excellent resume formatting provided by us!' },
            ].map((item, i) => (
              <div key={i} className="step-card" style={{
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
                background: '#fff',
                border: '1px solid #E2E8F0',
              }}>
                <div className="step-number" style={{ background: '#0f172a', color: '#fff' }}>
                  {item.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{item.title}</h3>
                  <p style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: '#475569', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources section */}
      <section className="home-section" style={{ background: '#fff' }}>
        <div style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 42px)', fontWeight: 700, color: '#0f172a', marginBottom: 16, lineHeight: 1.3 }}>
              Resources
            </h2>
            <p style={{ fontSize: 'clamp(13px, 2vw, 18px)', color: '#475569', maxWidth: 'min(600px, 100%)', lineHeight: 1.6, margin: '0 auto' }}>
              Everything that isn't covered by our technical capabilities is covered by our knowledge base and resume writing samples.
            </p>
            <a href="/resources" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#64748b',
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
              marginTop: 10,
            }}>
              Explore Resources <ArrowRight size={16} />
            </a>
          </div>

          <div className="home-grid grid-2">
            <div className="resource-card" style={{
              background: '#F8F9FA',
              border: '1px solid #E2E8F0',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#F5F3FF',
                color: '#64748b',
                fontSize: 12,
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: 16,
                marginBottom: 12,
              }}>
                <BookOpen size={12} />
                Field tested
              </div>
              <h3 style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: 700, color: '#0f172a', marginBottom: 8, lineHeight: 1.3 }}>
                The universal guide on how to write the perfect resume
              </h3>
              <p style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', color: '#64748b', marginBottom: 12 }}>
                Resume Guide · 57 min read
              </p>
              <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#475569', lineHeight: 1.6, margin: '0 0 12px' }}>
                Arm yourself with the golden rules of resume writing: what to include in your resume, which formatting standards to follow, which resume sections are necessary and which are optional, how to present your work experience and much more.
              </p>
              <a href="/resources/resume-guide" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: '#64748b',
                fontWeight: 600,
                fontSize: 13,
                textDecoration: 'none',
              }}>
                Read Now <ArrowRight size={14} />
              </a>
            </div>

            <div className="resource-card" style={{
              background: '#F8F9FA',
              border: '1px solid #E2E8F0',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#F5F3FF',
                color: '#64748b',
                fontSize: 12,
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: 16,
                marginBottom: 12,
              }}>
                <ThumbsUp size={12} />
                HR approved
              </div>
              <h3 style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', fontWeight: 700, color: '#0f172a', marginBottom: 8, lineHeight: 1.3 }}>
                A comprehensive guide on how to write a cover letter
              </h3>
              <p style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', color: '#64748b', marginBottom: 12 }}>
                Cover Letter Guide · 28 min read
              </p>
              <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#475569', lineHeight: 1.6, margin: '0 0 12px' }}>
                Our guide on cover letter writing answers all of the most important questions: why do you need a cover letter? What is the purpose of a cover letter? How to use creative writing when describing your job history and professional image?
              </p>
              <a href="/resources/cover-letter-guide" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: '#64748b',
                fontWeight: 600,
                fontSize: 13,
                textDecoration: 'none',
              }}>
                Read Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-section" style={{ background: '#F8F9FA' }}>
        <div style={{ width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 42px)', fontWeight: 700, color: '#0f172a', marginBottom: 24, lineHeight: 1.3, textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              {
                q: 'What is CVora and how does it work?',
                a: 'CVora is a powerful online resume builder that helps you create professional, ATS-friendly resumes in minutes. Simply choose a template, fill in your details using our intuitive form, customize the layout and colors, then download your resume as PDF. Our smart tools include auto-generated summaries, pre-written phrases, and real-time preview to make resume creation effortless.',
              },
              {
                q: 'Is CVora really free to use?',
                a: 'Yes! CVora offers a free resume builder with no sign-up required. You can create, edit, and preview your resume at no cost. We also offer premium features like advanced templates, additional export formats, and job tracking tools for users who want to take their job search to the next level.',
              },
              {
                q: 'Can I download my resume as a PDF?',
                a: 'Absolutely. CVora allows you to export your resume as a pixel-perfect PDF file that preserves all your formatting. PDF is the most widely accepted format by recruiters and applicant tracking systems (ATS). We also support Word export for employers who require it.',
              },
              {
                q: 'Are CVora templates ATS-friendly?',
                a: 'Yes, all our templates are designed with ATS compatibility in mind. Our templates use clean, standard formatting that applicant tracking systems can parse correctly. This means your resume will pass automated screening and land on the recruiter\'s desk looking exactly as intended.',
              },
              {
                q: 'Is my data safe and private?',
                a: 'Your privacy is our priority. CVora processes everything locally in your browser — your data never leaves your device. We do not store, upload, or share your personal information. You remain in full control of your resume data at all times.',
              },
              {
                q: 'Can I customize the colors and fonts?',
                a: 'Yes! CVora provides extensive customization options. You can change accent colors, font families, font sizes, line spacing, and section spacing. Each template can be fine-tuned to match your personal style or industry standards while maintaining a professional appearance.',
              },
              {
                q: 'What types of templates are available?',
                a: 'CVora offers a diverse collection of templates including Modern, Minimal, Professional, ATS-Optimized, Creative, and Premium designs. Each template is crafted by design experts and reviewed by recruiters to ensure it meets industry standards and appeals to hiring managers.',
              },
              {
                q: 'Can I import an existing resume?',
                a: 'Yes, CVora supports importing existing resumes. You can upload your current resume in JSON format and continue editing it with our builder. This makes it easy to switch to CVora without starting from scratch.',
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item" style={{
                background: '#fff',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
              }}>
                <div
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    fontSize: 'clamp(13px, 1.8vw, 15px)',
                    fontWeight: 600,
                    color: '#0f172a',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    userSelect: 'none',
                  }}
                >
                  <span style={{ flex: 1, paddingRight: 10 }}>{faq.q}</span>
                  <span style={{
                    color: '#64748b',
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 20,
                    height: 20,
                    transition: 'transform 0.3s ease',
                    transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    flexShrink: 0,
                  }}>+</span>
                </div>
                <div style={{
                  maxHeight: openFaq === i ? '500px' : '0',
                  overflow: 'hidden',
                  opacity: openFaq === i ? 1 : 0,
                  transition: 'all 0.3s ease',
                }}>
                  <p style={{
                    fontSize: 'clamp(13px, 1.5vw, 14px)',
                    lineHeight: 1.7,
                    color: '#475569',
                    margin: '0 16px 16px 16px',
                  }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="home-section" style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)', textAlign: 'center' }}>
        <div style={{ width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(22px, 4.5vw, 40px)', fontWeight: 700, color: '#0f172a', marginBottom: 16, lineHeight: 1.3 }}>
            Try our professional CV Builder now
          </h2>
          <p style={{ fontSize: 'clamp(13px, 2vw, 18px)', color: '#475569', marginBottom: 24, maxWidth: 'min(800px, 100%)', lineHeight: 1.6, margin: '0 auto 24px' }}>
            Online tools such as CV builders and job search websites have become the new norm in modern-day career advancement. We all use technology to improve our communication, learning and productivity. Why should searching for a job and writing a resume be any different?
          </p>

          <div className="home-grid grid-4">
            {[
              { icon: Zap, title: 'Customize within minutes', desc: 'One of the key drawbacks of CV writing is its time-consuming nature. Our CV builder tools aim to save as much of your time as possible.' },
              { icon: Palette, title: 'Beautiful visual designs', desc: 'Employ emotional and aesthetic persuasion via beautiful visual templates. Ensure easy reading for hiring managers with clean resume (CV) formatting.' },
              { icon: BookOpen, title: 'Professional storytelling', desc: 'A host of useful features are now expected to empower your professional storytelling: resume spell-checking, pre-written phrases, ready-to-go templates and more.' },
              { icon: Globe, title: 'Resources', desc: 'Everything that isn\'t covered by our technical capabilities is covered by our knowledge base and resume writing samples.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div className="icon-circle" style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <item.icon size={20} color="#64748b" />
                </div>
                <h3 style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', color: '#475569', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: 'clamp(13px, 1.5vw, 14px)',
            color: '#475569',
            marginBottom: 16,
            lineHeight: 1.5,
            marginTop: 24,
          }}>
            Join over 62,314,000 users worldwide
          </p>

          <a
            href="/builder"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: '#fff',
              background: '#0f172a',
              borderRadius: 8,
              textDecoration: 'none',
              maxWidth: '100%',
              wordBreak: 'keep-all',
            }}
          >
            Start for free — try our resume builder now <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}