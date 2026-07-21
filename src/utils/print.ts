import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function printResume() {
  const element = document.getElementById('resume-preview-print');
  if (!element) {
    window.print();
    return;
  }

  try {
    // Store original styles
    const originalStyles = {
      transform: element.style.transform,
      transformOrigin: element.style.transformOrigin,
      width: element.style.width,
      position: element.style.position,
      left: element.style.left,
      top: element.style.top,
      padding: element.style.padding,
      margin: element.style.margin,
      display: element.style.display,
      visibility: element.style.visibility,
      minHeight: element.style.minHeight,
      height: element.style.height,
      overflow: element.style.overflow,
    };

    // Temporarily normalize for printing: full width, no transforms
    element.style.transform = 'none';
    element.style.transformOrigin = 'unset';
    element.style.width = '210mm';
    element.style.position = 'static';
    element.style.left = 'auto';
    element.style.top = 'auto';
    element.style.padding = '0';
    element.style.margin = '0 auto';
    element.style.display = 'block';
    element.style.visibility = 'visible';
    element.style.minHeight = '297mm';
    element.style.height = 'auto';
    element.style.overflow = 'visible';

    // Wait for layout to settle
    await new Promise(r => setTimeout(r, 100));

    const targetWidth = 210 * 3.78; // ~794px at 96 DPI

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      width: targetWidth,
      windowWidth: targetWidth,
      // Don't constrain height - let it capture full content
    });

    // Restore original styles
    Object.assign(element.style, originalStyles);

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