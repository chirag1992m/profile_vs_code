import './src/styles/global.css'

import React from 'react'

import SideBar from './src/components/SideBar'
import { ContextProviders } from './src/contexts'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}): React.ReactElement {
    return (
        <html lang="en">
            <body>
                <div className="relative flex h-full min-h-screen w-full">
                    <ContextProviders>
                        <SideBar />
                        <div className="flex flex-1">{children}</div>
                    </ContextProviders>
                </div>
            </body>
        </html>
    )
}
