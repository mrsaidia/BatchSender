import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  ancient8,
  base,
  scroll,
  sepolia,
  merlin,
  optimism,
  monadTestnet
} from 'wagmi/chains';



import {  getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';




const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    {
      ...ancient8,
      iconBackground: '#FFD700',
      iconUrl:"https://pbs.twimg.com/profile_images/1701848315997077504/yovD2pCX_400x400.jpg"
      
    }, 
    base,
    optimism,
    {...scroll,
      iconBackground: '#FFD700',
      iconUrl:"https://pbs.twimg.com/profile_images/1696531511519150080/Fq5O0LeN_400x400.jpg"
    },
    {...merlin,
      iconBackground: '#FFD700',
      iconUrl:"https://scan.merlinchain.io/svgs/logo/merlin.png"
    },
    {...monadTestnet,
      iconBackground: '#FFD700',
      iconUrl:"https://pbs.twimg.com/profile_images/1877532281419739137/I_t8rg_V_400x400.jpg"

    },
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider  config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
