import * as React from 'react'

import { GlobalNavigationContext } from '../../contexts/GlobalNavigationContext'

export default function SidebarOverlay(): React.ReactElement {
    const { isOpen, setIsOpen } = React.useContext(GlobalNavigationContext)

    return (
        <div
            className={`fixed insext-0 z-20 bg-black bg-opacity-10 transition duration-200 ease-out dark:bg-opacity-50 ${
                isOpen
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
            }`}
            onClick={() => {
                setIsOpen(false)
            }}
        >
            {/* This is the overlay */}
        </div>
    )
}
