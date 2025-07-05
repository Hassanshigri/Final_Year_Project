'use client';
import { ClerkProvider } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

export function Providers({ children }) {
  const pathname = usePathname();
  
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#4868a2',
        },
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
}