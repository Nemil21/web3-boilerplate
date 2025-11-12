"use client";

import { useAccount, useBalance, useEnsName } from "wagmi";

/**
 * Simplified hook for Web3 user data
 * Returns wallet connection status, address, balance, and ENS name
 */
export interface UserData {
  address?: `0x${string}`;
  isConnected: boolean;
  isConnecting: boolean;
  isDisconnected: boolean;
  balance?: bigint;
  balanceFormatted?: string;
  ensName?: string | null;
  chainId?: number;
}

export function useUser(): UserData {
  const { address, isConnected, isConnecting, isDisconnected, chainId } = useAccount();
  
  const { data: balance } = useBalance({
    address: address,
  });

  const { data: ensName } = useEnsName({
    address: address,
    chainId: 1, // ENS is on mainnet
  });

  return {
    address,
    isConnected,
    isConnecting,
    isDisconnected,
    balance: balance?.value,
    balanceFormatted: balance?.formatted,
    ensName,
    chainId,
  };
}


