"use client";

import { useState } from 'react';

interface PDFViewerProps {
  pdfPath: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfPath }) => {
  // PDF'i iframe içinde göstereceğiz, bu CORS sorunlarını önleyecek
  return (
    <div className="flex flex-col h-full w-full">
      <iframe 
        src={pdfPath} 
        className="w-full h-full border-0" 
        title="PDF Katalog"
      />
    </div>
  );
};

export default PDFViewer;
