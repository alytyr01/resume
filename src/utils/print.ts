import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function printResume() {
  try {
    const element = document.getElementById('resume-preview-print');

    if (!element) {
      console.warn('Resume preview element not found in DOM');
      window.print();
      return;
    }

    // Clone the resume element and normalize styles for capture
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.transform = 'none';
    clone.style.transformOrigin = 'unset';
    clone.style.width = '210mm';
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

    // Force layout calculation before measuring
    const targetWidth = 210 * 3.78; // ~794px
    const contentHeight = clone.scrollHeight || 1500;

    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      width: targetWidth,
      windowWidth: targetWidth,
      height: contentHeight,
      windowHeight: contentHeight,
      logging: false,
      onclone: () => {
        clone.style.position = 'absolute';
        clone.style.left = '-9999px';
        clone.style.top = '0';
      },
    });

    document.body.removeChild(clone);

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 210;
    const pdfHeight = 297;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    if (imgHeight <= pdfHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      const pageCount = Math.ceil(imgHeight / pdfHeight);
      for (let i = 0; i < pageCount; i++) {
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -i * pdfHeight, imgWidth, imgHeight);
      }
    }

    pdf.save('resume.pdf');
  } catch (error) {
    console.error('Failed to generate PDF:', error);

    // Fallback: try a simpler capture approach for mobile
    try {
      const fallbackEl = document.getElementById('resume-preview-print');
      if (fallbackEl) {
        const clone2 = fallbackEl.cloneNode(true) as HTMLElement;
        clone2.style.transform = 'none';
        clone2.style.width = '794px';
        clone2.style.position = 'absolute';
        clone2.style.left = '-9999px';
        clone2.style.top = '0';
        clone2.style.height = 'auto';
        clone2.style.overflow = 'visible';
        document.body.appendChild(clone2);

        const canvas2 = await html2canvas(clone2, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
        });

        document.body.removeChild(clone2);

        const imgData2 = canvas2.toDataURL('image/png');
        const pdf2 = new jsPDF('p', 'mm', 'a4');
        const pdfWidth2 = 210;
        const pdfHeight2 = 297;
        const imgWidth2 = pdfWidth2;
        const imgHeight2 = (canvas2.height * pdfWidth2) / canvas2.width;

        pdf2.addImage(imgData2, 'PNG', 0, 0, imgWidth2, Math.min(imgHeight2, pdfHeight2));
        pdf2.save('resume.pdf');
        return;
      }
    } catch (fallbackError) {
      console.error('Fallback PDF also failed:', fallbackError);
    }

    window.print();
  }
}