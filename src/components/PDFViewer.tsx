"use client";

import { useEffect, useRef } from 'react';

interface PDFViewerProps {
  pdfPath: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mobil cihazlarda kaydırma sorununu çözmek için
  // object etiketi kullanıyoruz ve style'ları doğrudan uyguluyoruz
  useEffect(() => {
    // Mobil cihazlar için kaydırma davranışını iyileştir
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.overflowY = 'auto';
      // iOS için daha iyi kaydırma
      (container.style as any)['-webkit-overflow-scrolling'] = 'touch';
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col h-full w-full overflow-auto">
      <object
        data={pdfPath}
        type="application/pdf"
        className="w-full h-full"
      >
        <div className="flex items-center justify-center p-4 text-center">
          <p>
            PDF görüntülenemiyor. 
            <a 
              href={pdfPath} 
              download 
              className="text-blue-600 underline ml-1"
            >
              İndirmek için tıklayın
            </a>
          </p>
        </div>
      </object>
    </div>
  );
};

export default PDFViewer;
