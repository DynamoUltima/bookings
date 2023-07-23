// import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider, useQuery, Hydrate } from '@tanstack/react-query'
import '../components/Calendar.css';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        
          <Component {...pageProps} />
       
      </Hydrate>
    </QueryClientProvider>
  )
}
