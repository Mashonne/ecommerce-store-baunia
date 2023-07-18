import './globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar/navbar'
import getCurrentUser from '@/actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar currentUser={currentUser}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
