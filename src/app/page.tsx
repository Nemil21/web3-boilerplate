'use client';

import { ConnectWallet } from '@/components/wallet/ConnectWallet';
import { Tabs } from '@/components/ui/Tabs';
import { Button } from '@/components/ui/Button';
import { useUser } from '@/hooks';
import { truncateAddress, formatBalance } from '@/lib/utils';
import { Wallet, Network, Coins } from 'lucide-react';

export default function Home() {
  const {
    address,
    isConnected,
    isConnecting,
    balance,
    ensName,
    chainId,
  } = useUser();

  if (isConnecting) {
    return (
      <div className="app-container">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="text-white text-lg">Connecting...</div>
          </div>
        </div>
      </div>
    );
  }

  const displayName = ensName || (address ? truncateAddress(address) : null);
  const welcomeMessage = isConnected
    ? `Welcome, ${displayName}`
    : 'Connect your wallet to get started';

  // Tab content - customize these for your app
  const tabs = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      content: (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="app-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <Wallet className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-white">Wallet</h3>
              </div>
              <p className="text-sm text-gray-400">
                {address ? truncateAddress(address) : 'Not connected'}
              </p>
            </div>
            
            <div className="app-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <Coins className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-white">Balance</h3>
              </div>
              <p className="text-sm text-gray-400">
                {balance ? `${formatBalance(balance, 18, 4)} ETH` : '0 ETH'}
              </p>
            </div>
            
            <div className="app-card p-6">
              <div className="flex items-center gap-3 mb-2">
                <Network className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-white">Network</h3>
              </div>
              <p className="text-sm text-gray-400">
                Chain ID: {chainId || 'N/A'}
              </p>
            </div>
          </div>

          {isConnected && (
            <div className="app-card p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Your Web3 Dashboard
              </h3>
              <p className="text-gray-300 mb-6">
                Build your amazing Web3 features here! This boilerplate includes:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>✨ Multiple wallet connectors (MetaMask, WalletConnect, Coinbase)</li>
                <li>🔗 Multi-chain support (Mainnet, Base, Optimism, Arbitrum, Polygon)</li>
                <li>🎨 Beautiful, modern UI components</li>
                <li>⚡ Optimized for Web3 applications</li>
                <li>🛠️ TypeScript & full type safety</li>
              </ul>
              <div className="flex gap-3">
                <Button variant="default">
                  Get Started
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'transactions',
      title: 'Transactions',
      content: (
        <div className="app-card p-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Transaction History
          </h3>
          <p className="text-gray-400">
            Your transaction history will appear here. Build your transaction
            tracking features!
          </p>
        </div>
      ),
    },
    {
      id: 'settings',
      title: 'Settings',
      content: (
        <div className="app-card p-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Settings
          </h3>
          <p className="text-gray-400">
            Configure your application settings here.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="app-container">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3 font-display">
            Web3 App
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {welcomeMessage}
          </p>
          
          <ConnectWallet />
        </header>

        {isConnected && (
          <main className="max-w-6xl mx-auto">
            <Tabs tabs={tabs} defaultTab="dashboard" />
          </main>
        )}

        {!isConnected && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="app-card p-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Get Started with Web3
              </h2>
              <p className="text-gray-300 mb-8">
                Connect your wallet to access all features of this Web3 application.
                We support MetaMask, WalletConnect, Coinbase Wallet, and more!
              </p>
              <div className="grid gap-4 md:grid-cols-3 text-left">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h3 className="font-semibold text-white mb-2">Secure</h3>
                  <p className="text-sm text-gray-400">
                    Your keys, your crypto. We never have access to your funds.
                  </p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h3 className="font-semibold text-white mb-2">Fast</h3>
                  <p className="text-sm text-gray-400">
                    Lightning-fast transactions across multiple networks.
                  </p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h3 className="font-semibold text-white mb-2">Easy</h3>
                  <p className="text-sm text-gray-400">
                    Simple interface designed for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


