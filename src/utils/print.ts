import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function printResume() {
  const element = document.getElementById('resume-preview-print');
  if (!element) {
    window.print();
    return;
  }

  try {
    // Clone the resume element and normalize styles for capture
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.transform = 'none';
    clone.style.transformOrigin = 'unset';
    clone.style.width = '210mm';
    clone.style.position = 'static';
    clone.style.left = 'auto';
    clone.style.top = 'auto';
    clone.style.padding = '0';
    clone.style.margin = '0 auto';
    clone.style.visibility = 'visible';
    clone.style.minHeight = '297mm';
    clone.style.height = 'auto';
    clone.style.overflow = 'visible';

    // Position off-screen for capture
    clone.style.position = 'absolute';
    clone.style.left = '-9999px';
    clone.style.top = '0';
    document.body.appendChild(clone);

    const targetWidth = 210 * 3.78; // ~794px
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      width: targetWidth,
      windowWidth: targetWidth,
      height: clone.scrollHeight,
      windowHeight: clone.scrollHeight,
    });

    document.body.removeChild(clone);

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 210;
    const pdfHeight = 297;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    // If content fits on one page
    if (imgHeight <= pdfHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      // Multi-page: fit width and split across pages
      const pageCount = Math.ceil(imgHeight / pdfHeight);
      for (let i = 0; i < pageCount; i++) {
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -i * pdfHeight, imgWidth, imgHeight);
      }
    }

    pdf.save('resume.pdf');
  } catch (error) {
    console.error('Failed to generate PDF:', error);
    window.print();
  }
}