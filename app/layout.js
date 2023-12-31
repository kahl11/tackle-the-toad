import { Box } from '@mui/material'
import './globals.css'
import NavBar from '@/src/components/NavBar'
import Footer from '@/src/components/Footer'
import ThemeWrapper, { theme } from '../src/style/theme'
import GlobalContextProvider from '@/src/components/GlobalContextProvider'

export const metadata = {
  title: 'Tackle the Toad',
  description: 'Race to Tackle Toad Mountain',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
       <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@800&family=Roboto:wght@100&display=swap" rel="stylesheet"></link> 
      </head>
      <body>
        <Box>
          <ThemeWrapper>
            <GlobalContextProvider>
              <NavBar />
              <Box sx={{
                minHeight: '95vh',
                backgroundColor: "#EFEEE5"
              }}>
                {children}
              </Box>
              <Footer />
            </GlobalContextProvider>
          </ThemeWrapper>
        </Box>
      </body>
    </html>
  )
}
