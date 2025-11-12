import { http, createConfig } from "wagmi";
import { mainnet, base, baseSepolia, optimism, arbitrum, polygon } from "wagmi/chains";
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors";
import type { CreateConnectorFn } from "wagmi";

// Get WalletConnect project ID from environment (OPTIONAL - only needed for mobile wallets)
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";

/**
 * Build connectors array
 * MetaMask and Coinbase Wallet work without any API keys
 * WalletConnect is optional - only needed for mobile wallet QR code support
 */
function getConnectors(): CreateConnectorFn[] {
  const connectors: CreateConnectorFn[] = [
    // MetaMask - Works without any API keys
    injected({ 
      target: "metaMask",
      shimDisconnect: true,
    }),
    // Coinbase Wallet - Works without any API keys
    coinbaseWallet({
      appName: "Web3 App",
      appLogoUrl: undefined,
    }),
  ];

  // Only add WalletConnect if Project ID is provided
  // WalletConnect enables mobile wallets via QR code (Trust Wallet, Rainbow, etc.)
  if (projectId) {
    connectors.push(
      walletConnect({ 
        projectId,
        showQrModal: true,
      })
    );
  }

  return connectors;
}

/**
 * Wagmi configuration for Web3 apps
 * Includes multiple chains and wallet connectors
 * 
 * WORKS OUT OF THE BOX - No API keys required for MetaMask & Coinbase Wallet!
 * Add NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID to .env.local for mobile wallet support.
 */
export const config = createConfig({
  chains: [mainnet, base, baseSepolia, optimism, arbitrum, polygon],
  connectors: getConnectors(),
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [polygon.id]: http(),
  },
  ssr: true,
});

