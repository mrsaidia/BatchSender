import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia, linea } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [mainnet, sepolia, linea],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [linea.id]: http(),
  },
})