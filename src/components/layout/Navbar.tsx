'use client';

import { ConnectWallet } from '@/components/wallet/ConnectWallet';

export function Navbar() {
  return (
    <nav className="border-b z-40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-primary font-heading">
          Web3 App
        </h1>
        <div className="flex items-center [&>div]:!justify-end">
          <ConnectWallet />
        </div>
      </div>
    </nav>
  );
}

