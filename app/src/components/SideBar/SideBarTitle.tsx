import React from 'react'

export interface SideBarTitleProps {
    title: string
}

export function SideBarTitle(
    titleProps: SideBarTitleProps
): React.ReactElement {
    return <h1>{titleProps.title}</h1>
}
