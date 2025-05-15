"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  // PDF dosya yolu
  const pdfPath = "/pdfs/stkozmetik-katalog-cihaz.pdf";
  
  // Sayfa yüklendiğinde doğrudan PDF'e yönlendir
  useEffect(() => {
    // Sadece client tarafında çalış
    if (typeof window !== "undefined") {
      // Mobil cihazlarda doğrudan PDF'e yönlendir
      if (window.innerWidth < 768) {
        window.location.href = pdfPath;
      }
    }
  }, [pdfPath]);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="h-10">
            <Image 
              src="/logos/st-kozmetik-gold-yatay.png" 
              alt="ST Kozmetik Logo" 
              width={180} 
              height={40} 
              className="h-full w-auto object-contain" 
              priority
            />
          </div>
          <a 
            href={pdfPath} 
            download
            className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            İndir
          </a>
        </div>
      </header>

      <main className="flex-1 w-full hidden md:block">
        <div className="h-[calc(100vh-80px)]">
          <iframe 
            src={pdfPath} 
            className="w-full h-full border-0" 
            title="PDF Katalog"
          />
        </div>
      </main>
      
      <div className="flex-1 w-full flex items-center justify-center p-4 md:hidden">
        <p className="text-center text-gray-600">
          PDF yükleniyor... Eğer otomatik olarak açılmazsa, 
          <a href={pdfPath} className="text-blue-600 underline">buraya tıklayın</a>
        </p>
      </div>

      <footer className="bg-white py-2 border-t text-center text-gray-500 text-sm">
        <p>ST Kozmetik Katalog &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
