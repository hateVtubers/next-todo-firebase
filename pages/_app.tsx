import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { TaskContextProvider } from '../context/taskContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskContextProvider>
      <Component {...pageProps} />
    </TaskContextProvider>
  )
}

export default MyApp
