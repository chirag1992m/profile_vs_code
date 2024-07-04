import './src/styles/global.css'

import type { Metadata } from 'next'
import React from 'react'

import SideBar from './src/components/SideBar'
import { ContextProviders } from './src/contexts'

import sections from './global_navigation'
import SiteAnalytics from './src/components/Analytics/SiteAnalytics'

export const metadata: Metadata = {
    title: 'Digital Madness',
    description: "Chirag Maheshwari's Webspace",
    authors: { name: 'Chirag Maheshwari' },
    keywords: ['Digital Webspace', 'Chirag Maheshwari', ''],
    creator: 'Chirag Maheshwari',
    publisher: 'Chirag Maheshwari',
}

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
                        <SideBar
                            titleProps={{
                                title: 'Digital Madness',
                                globalMenu: true,
                            }}
                            navSections={sections}
                            footerProps={{ label: 'Chirag Maheshwari' }}
                        ></SideBar>
                        <div className="flex flex-1">{children}</div>
                    </ContextProviders>
                </div>

                <SiteAnalytics />
            </body>
        </html>
    )
}
