/**
 * Global type definitions for the Web3 app
 */

export interface Chain {
  id: number;
  name: string;
  network: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: {
      http: string[];
    };
  };
  blockExplorers?: {
    default: {
      name: string;
      url: string;
    };
  };
}

export interface Token {
  address: `0x${string}`;
  symbol: string;
  decimals: number;
  name: string;
  logoURI?: string;
}

export interface WalletInfo {
  address: `0x${string}`;
  balance: bigint;
  chainId: number;
  ensName?: string | null;
}


