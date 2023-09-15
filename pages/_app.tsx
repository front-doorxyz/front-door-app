import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { hardhat } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    hardhat
  ],
  [publicProvider()]
);

// NEXT_PUBLIC_PROJECT_ID="19adac522b79a2ecaffa7ae69e810ef7";
// NEXT_PUBLIC_APP_NAME='Front Door'

const { connectors } = getDefaultWallets({
  appName: 'Front Door', 
  projectId: "19adac522b79a2ecaffa7ae69e810ef7",
  chains,
});


const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}


export default MyApp;
