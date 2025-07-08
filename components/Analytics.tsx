'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!NEXT_PUBLIC_GA_ID || typeof window.gtag !== 'function') return;

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
    window.gtag('config', NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
};

export default Analytics;
