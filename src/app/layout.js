import './globals.css'
import './globalsMedia.css'
import Navigation from '@/components/navigation/navigation'

import React from 'react';
// import ReactDOM from 'react-dom/client'
import {Inter} from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next App',
  description: 'Practica project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
