import * as React from 'react'

import Link from 'next/link'

import { GlobalNavigationContext } from '../../contexts/GlobalNavigationContext'

export interface SideBarNavigationLinkProps {
    href: string
    label: string
    icon: React.ReactNode
    trailingIcon: React.ReactNode | null
    // TODO: What is this used for?
    // trailingAction: Action,
    isExternal: boolean
}

export function SideBarNavigationLink({
    linkProps,
    isActive,
}: {
    linkProps: SideBarNavigationLinkProps
    isActive: boolean
}): React.ReactElement {
    const { setIsOpen } = React.useContext(GlobalNavigationContext)

    return (
        <li
            className="flex items-stretch space-x-1"
            onClick={() => {
                setIsOpen(false)
            }}
        >
            <Link
                href={linkProps.href}
                target={linkProps.isExternal ? '_blank' : undefined}
                rel={linkProps.isExternal ? 'noopener noreferrer' : undefined}
                className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  ${
                    isActive
                        ? 'bg-black text-white hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                        : 'text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200'
                }`}
            >
                <span className="flex items-center justify-center w-4">
                    {linkProps.icon}
                </span>
                <span className="flex-1">{linkProps.label}</span>
                {linkProps.trailingIcon && (
                    <span className="flex items-center justify-center w-4 text-black text-opacity-40 dark:text-white">
                        {linkProps.trailingIcon}
                    </span>
                )}
            </Link>
        </li>
    )
}
