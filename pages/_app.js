import { ChainId } from '@thirdweb-dev/sdk'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
        desiredChainId = {ChainId.Mumbai}
        chainRpc={{
            [ChainId.Mumbai]:'https://polygon-mumbai.g.alchemy.com/v2/9b95-4IqoLkOt8FZBva0AjttqggZnsV6'
        }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
