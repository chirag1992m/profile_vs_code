import * as React from 'react'

export interface SideBarNavigationLinkProps {
    href: string
    label: string
    icon: React.ReactSVG
    trailingAccessory: React.ReactSVG
    // TODO: What is this used for?
    // trailingAction: Action,
    isActive: boolean
    isExternal: boolean
}

export function SideBarNavigationLink({
    href,
    label,
    icon,
    trailingAccessory,
    isActive,
    isExternal,
}: SideBarNavigationLinkProps): React.ReactElement {
    // const { setIsOpen } = React.useContext(GlobalNavigationContext)

    return <li>This is a list item</li>
}
