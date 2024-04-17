import React from 'react'

import { SideBarNavigationLinkProps, SideBarNavigationLink } from './SideBarNavigationLink'


export interface SideBarNavigationSectionProps {
    label: string
    links: SideBarNavigationLinkProps[]
 }


export function SideBarNavigation({navigationSections}: {navigationSections: SideBarNavigationSectionProps[]}): React.ReactElement {
    return (
        <div className="flex-1 px-3 py-3 space-y-1">
            {navigationSections.map((section, i) => {
            return (
                <ul key={`section_${i}`} className="space-y-1">
                {section.label && (
                    <h4
                    key={i}
                    className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
                    >
                    {section.label}
                    </h4>
                )}
                {section.links.map((item, j) => (
                    <SideBarNavigationLink key={`section_${i}_link_${j}`} {...item} />
                ))}
                </ul>
            )
            })}
        </div>
    )
}
