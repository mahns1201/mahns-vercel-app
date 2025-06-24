'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_ID = process.env.GA_ID || '';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // URL 변경 감지
  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');

    if (typeof window.gtag === 'function') {
      window.gtag('config', GA_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
