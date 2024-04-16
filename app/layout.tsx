import React from 'react'
import SideBar from './components/page'
import './global.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): React.ReactNode {
    return (
        <html lang="en">
            <body>
                <div className="relative flex h-full min-h-screen w-full">
                    <SideBar />
                    <div className="flex flex-1">{children}</div>
                </div>
            </body>
        </html>
    )
}
