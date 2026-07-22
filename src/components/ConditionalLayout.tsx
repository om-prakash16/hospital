'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Do not show the global header/footer on these routes because they have their own
  const hideGlobalLayout = pathname?.startsWith('/medicloud') || 
                           pathname?.startsWith('/theme3') || 
                           pathname?.startsWith('/theme4');

  return (
    <>
      {!hideGlobalLayout && <Header />}
      <div className="flex-1 w-full">
        {children}
      </div>
      {!hideGlobalLayout && <Footer />}
    </>
  );
}
