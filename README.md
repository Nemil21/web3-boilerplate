# Web3 Boilerplate

A modern, production-ready Web3 application boilerplate built with Next.js 15, Wagmi, and RainbowKit.

## 🚀 Features

- ⚡ **Next.js 15** - Latest version with App Router and React 19
- 🔗 **Wagmi v2** - React Hooks for Ethereum
- 🌈 **RainbowKit** - Beautiful wallet connection UI
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 📱 **Multi-Wallet Support** - MetaMask, WalletConnect, Coinbase Wallet, and more
- 🌐 **Multi-Chain Support** - Ethereum Mainnet, Base, Optimism, Arbitrum, Polygon
- 🎭 **TypeScript** - Full type safety
- 🎯 **Modern UI Components** - Pre-built, customizable components
- 🔒 **Security Headers** - Production-ready security configuration
- 📦 **ESLint & Prettier** - Code quality and formatting

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- **Optional:** WalletConnect Project ID (only needed for mobile wallet support via QR codes)

## 🛠️ Getting Started

### 1. Clone or copy this boilerplate

```bash
# Copy the web3-boilerplate directory to your project location
cp -r web3-boilerplate my-web3-app
cd my-web3-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure environment variables (OPTIONAL)

**The app works out of the box with MetaMask and Coinbase Wallet - no configuration needed!**

If you want mobile wallet support (Trust Wallet, Rainbow, etc. via QR code), create a `.env.local` file:

```env
# WalletConnect Project ID (OPTIONAL - only for mobile wallet QR code support)
# Get yours at: https://cloud.walletconnect.com
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Optional: Add your own RPC URLs for better performance
# NEXT_PUBLIC_MAINNET_RPC_URL=https://your-mainnet-rpc
# NEXT_PUBLIC_BASE_RPC_URL=https://your-base-rpc
```

**Skip this step if you only need MetaMask/Coinbase Wallet support!**

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your Web3 app!

## 📂 Project Structure

```
web3-boilerplate/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── providers.tsx      # Web3 providers
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Tabs.tsx
│   │   └── wallet/
│   │       └── ConnectWallet.tsx
│   ├── hooks/                 # Custom React hooks
│   │   ├── index.ts
│   │   └── useUser.ts         # User/wallet hook
│   ├── lib/                   # Utility functions
│   │   ├── utils.ts
│   │   └── wagmi.ts           # Wagmi configuration
│   └── types/                 # TypeScript types
│       └── index.ts
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### Adding New Chains

Edit `src/lib/wagmi.ts` to add or remove blockchain networks:

```typescript
import { mainnet, base, optimism, arbitrum, polygon } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, base, optimism, arbitrum, polygon],
  // ... rest of config
});
```

### Customizing Theme

Edit the colors in `tailwind.config.js` and `src/app/globals.css`:

```css
:root {
  --primary: #D14EEE;  /* Change primary color */
  --primary-hover: #b83dd4;
}
```

### Adding Custom Wallet Connectors

Edit `src/lib/wagmi.ts` to add more wallet connectors:

```typescript
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors";

connectors: [
  injected({ target: "metaMask" }),
  walletConnect({ projectId }),
  coinbaseWallet({ appName: "Your App" }),
  // Add more connectors here
],
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Learn More

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Wagmi Documentation](https://wagmi.sh)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)
- [Viem Documentation](https://viem.sh)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Key Concepts

#### useUser Hook

The `useUser` hook provides easy access to wallet data:

```tsx
import { useUser } from '@/hooks';

function MyComponent() {
  const { address, isConnected, balance, ensName } = useUser();
  
  return (
    <div>
      {isConnected && <p>Connected: {address}</p>}
    </div>
  );
}
```

#### ConnectWallet Component

Pre-built wallet connection component with RainbowKit:

```tsx
import { ConnectWallet } from '@/components/wallet/ConnectWallet';

function MyPage() {
  return <ConnectWallet />;
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

This boilerplate works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

## 🔒 Security

- Never commit `.env.local` or private keys to version control
- Always use environment variables for sensitive data
- Review and test all smart contract interactions
- Use hardware wallets for production applications

## 🤝 Contributing

Feel free to customize this boilerplate for your needs! Some ideas:

- Add more UI components
- Integrate with smart contracts
- Add NFT support
- Add token swapping features
- Add analytics
- Add testing (Jest, Playwright)

## 📝 License

This boilerplate is open source and available under the MIT License.

## 💡 Tips

1. **Get a WalletConnect Project ID** - Required for WalletConnect functionality
2. **Test on Multiple Networks** - Use testnets (Base Sepolia, etc.) during development
3. **Use Custom RPC URLs** - For better performance, use services like Alchemy or Infura
4. **Keep Dependencies Updated** - Regularly update packages for security and features
5. **Read the Docs** - Wagmi and RainbowKit have excellent documentation

## 🐛 Troubleshooting

### Wallet Not Connecting

- Ensure you have a valid `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- Check that your wallet extension is installed and unlocked
- Clear browser cache and try again

### Build Errors

- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check that all peer dependencies are installed

### Styling Issues

- Ensure Tailwind is properly configured
- Check for CSS class name conflicts
- Clear Next.js cache with `rm -rf .next`

## 📞 Support

Need help? Check out:
- [Wagmi Discord](https://discord.gg/wagmi)
- [Next.js Discord](https://discord.gg/nextjs)
- [RainbowKit GitHub](https://github.com/rainbow-me/rainbowkit)

---

**Happy Building! 🚀**

