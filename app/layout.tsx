import React from 'react'
import './global.css'
import SideBar from './components/page'

export default function RootLayout ({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang='en'>
      <body>
        <div className='relative flex h-full min-h-screen w-full'>
          <SideBar />
          <div className='flex flex-1'>{children}</div>
        </div>
      </body>
    </html>
  )
}
