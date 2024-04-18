import SideBar from '../src/components/SideBar'

import sections from './writing_sections'

export default function WritingLayout({
    children,
}: {
    children: React.ReactNode
}): React.ReactElement {
    return (
        <div className="relative flex h-full min-h-screen w-full">
            <SideBar
                titleProps={{
                    title: 'Writing',
                    globalMenu: false,
                }}
                navSections={sections}
                footerProps={null}
            ></SideBar>
            <div className="flex flex-1">{children}</div>
        </div>
    )
}
