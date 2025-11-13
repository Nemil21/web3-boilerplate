'use client';

import { useEffect, useState } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config } from '@/lib/wagmi';
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

// Helper function to get CSS variable value
function getCSSVariable(variable: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [accentColor, setAccentColor] = useState('#D14EEE');
  const [accentColorForeground, setAccentColorForeground] = useState('white');

  useEffect(() => {
    // Read CSS variables from the document
    const primary = getCSSVariable('--primary');
    const primaryForeground = getCSSVariable('--primary-foreground');
    
    // Convert oklch to hex if needed, or use as-is if already hex
    // For now, we'll use a fallback and let RainbowKit handle the conversion
    if (primary) {
      // If it's oklch, we need to convert it, but RainbowKit might accept it
      // For simplicity, we'll check if it starts with oklch and convert
      if (primary.startsWith('oklch')) {
        // Try to extract and convert, or use a computed style approach
        const tempEl = document.createElement('div');
        tempEl.style.color = primary;
        document.body.appendChild(tempEl);
        const computed = getComputedStyle(tempEl).color;
        document.body.removeChild(tempEl);
        setAccentColor(computed || '#D14EEE');
      } else {
        setAccentColor(primary);
      }
    }
    
    if (primaryForeground) {
      if (primaryForeground.startsWith('oklch')) {
        const tempEl = document.createElement('div');
        tempEl.style.color = primaryForeground;
        document.body.appendChild(tempEl);
        const computed = getComputedStyle(tempEl).color;
        document.body.removeChild(tempEl);
        setAccentColorForeground(computed || 'white');
      } else {
        setAccentColorForeground(primaryForeground);
      }
    }
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: accentColor,
            accentColorForeground: accentColorForeground,
            borderRadius: 'large',
            fontStack: 'system',
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}


