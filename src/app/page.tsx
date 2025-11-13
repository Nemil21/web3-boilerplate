'use client';

import { Tabs, TabsList, TabsTab, TabsPanel } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardPanel, CardDescription } from '@/components/ui/card';
import { useUser } from '@/hooks';
import { truncateAddress, formatBalance } from '@/lib/utils';
import { Wallet, Network, Coins } from 'lucide-react';

export default function Home() {
  const { address, isConnected, isConnecting, balance, ensName, chainId } = useUser();

  if (isConnecting) {
    return (
      <div className="app-container">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="text-foreground text-lg">Connecting...</div>
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
            <Card className="p-6">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Wallet className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Wallet</CardTitle>
                </div>
              </CardHeader>
              <CardPanel>
                <CardDescription>
                  {address ? truncateAddress(address) : 'Not connected'}
                </CardDescription>
              </CardPanel>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Coins className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Balance</CardTitle>
                </div>
              </CardHeader>
              <CardPanel>
                <CardDescription>
                  {balance ? `${formatBalance(balance, 18, 4)} ETH` : '0 ETH'}
                </CardDescription>
              </CardPanel>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Network className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Network</CardTitle>
                </div>
              </CardHeader>
              <CardPanel>
                <CardDescription>Chain ID: {chainId || 'N/A'}</CardDescription>
              </CardPanel>
            </Card>
          </div>

          {isConnected && (
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-xl mb-4">Your Web3 Dashboard</CardTitle>
                <CardDescription className="mb-6">
                  Build your amazing Web3 features here! This boilerplate includes:
                </CardDescription>
              </CardHeader>
              <CardPanel>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>✨ Multiple wallet connectors (MetaMask, WalletConnect, Coinbase)</li>
                  <li>🔗 Multi-chain support (Mainnet, Base, Optimism, Arbitrum, Polygon)</li>
                  <li>🎨 Beautiful, modern UI components</li>
                  <li>⚡ Optimized for Web3 applications</li>
                  <li>🛠️ TypeScript & full type safety</li>
                </ul>
                <div className="flex gap-3">
                  <Button variant="default">Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardPanel>
            </Card>
          )}
        </div>
      ),
    },
    {
      id: 'transactions',
      title: 'Transactions',
      content: (
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Transaction History</CardTitle>
          </CardHeader>
          <CardPanel>
            <CardDescription>
              Your transaction history will appear here. Build your transaction tracking features!
            </CardDescription>
          </CardPanel>
        </Card>
      ),
    },
    {
      id: 'settings',
      title: 'Settings',
      content: (
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-xl mb-4">Settings</CardTitle>
          </CardHeader>
          <CardPanel>
            <CardDescription>Configure your application settings here.</CardDescription>
          </CardPanel>
        </Card>
      ),
    },
  ];

  return (
    <div className="app-container">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-3 font-display">Web3 App</h1>
          <p className="text-xl text-muted-foreground mb-8">{welcomeMessage}</p>
        </header>

        {isConnected && (
          <main className="max-w-6xl mx-auto">
            <Tabs defaultValue="dashboard">
              <TabsList className="w-full">
                {tabs.map((tab) => (
                  <TabsTab key={tab.id} value={tab.id}>
                    {tab.title}
                  </TabsTab>
                ))}
              </TabsList>
              {tabs.map((tab) => (
                <TabsPanel key={tab.id} value={tab.id}>
                  {tab.content}
                </TabsPanel>
              ))}
            </Tabs>
          </main>
        )}

        {!isConnected && (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Get Started with Web3</CardTitle>
                <CardDescription className="mb-8">
                  Connect your wallet to access all features of this Web3 application. We support
                  MetaMask, WalletConnect, Coinbase Wallet, and more!
                </CardDescription>
              </CardHeader>
              <CardPanel>
              <div className="grid gap-4 md:grid-cols-3 text-left">
                <div className="p-4 bg-card/50 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Secure</h3>
                  <p className="text-sm text-muted-foreground">
                    Your keys, your crypto. We never have access to your funds.
                  </p>
                </div>
                <div className="p-4 bg-card/50 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Lightning-fast transactions across multiple networks.
                  </p>
                </div>
                <div className="p-4 bg-card/50 rounded-lg border border-border">
                  <h3 className="font-semibold text-foreground mb-2">Easy</h3>
                  <p className="text-sm text-muted-foreground">Simple interface designed for everyone.</p>
                </div>
              </div>
              </CardPanel>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
