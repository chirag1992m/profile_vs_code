import React from 'react'

export interface SideBarFooterProps {
    label: string
}


export function SideBarFooter({label}: SideBarFooterProps): React.ReactElement {
    return (
        <div
            className="sticky bottom-0 z-10 flex items-center justify-between p-2 space-x-3 bg-white
      border-t filter-blur border-gray-150 bg-opacity-80 dark:border-gray-800 dark:bg-gray-900 dark:bg-opacity-60
      "
        >
            <div className="flex items-center justify-center w-full py-1">
                {label}
            </div>
        </div>
    )
}
