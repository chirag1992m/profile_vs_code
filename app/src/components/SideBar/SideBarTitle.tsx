import React from 'react'
import { ImCross } from 'react-icons/im'
import { TiThMenu } from 'react-icons/ti'

import { GlobalNavigationContext } from '../../contexts/GlobalNavigationContext'

export interface SideBarTitleProps {
    title: string
    globalMenu?: boolean
    // backButton?: boolean
    // backButtonHref?: string
    // magicTitle?: boolean
    // titleRef?: React.MutableRefObject<HTMLParagraphElement>
    // scrollContainerRef?: React.MutableRefObject<HTMLDivElement>
    children?: React.ReactNode
    // leadingAccessory?: React.ReactNode
    // trailingAccessory?: React.ReactNode
}

export function SideBarTitle({
    title,
    globalMenu,
    // backButton,
    // backButtonHref,
    // magicTitle,
    // titleRef,
    // scrollContainerRef,
    children,
    // leadingAccessory,
    // trailingAccessory
}: SideBarTitleProps): React.ReactElement {
    const { isOpen, setIsOpen } = React.useContext(GlobalNavigationContext)
    const currentScrollOffset: number = 0
    // const offset = 200
    // const opacity = 0

    return (
        <>
            <div
                style={{
                    background: `rgba(255,255,255',${
                        currentScrollOffset === 0
                            ? currentScrollOffset
                            : currentScrollOffset + 0.8
                    })`,
                    boxShadow: `0 1px 3px rgba(0,0,0,0)`,
                    minHeight: '48px',
                }}
                className={`filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900`}
            >
                <div className="flex items-center justify-between flex-none">
                    <span className="flex items-center space-x-3">
                        {globalMenu && (
                            <span
                                onClick={() => {
                                    setIsOpen(!isOpen)
                                }}
                                className="flex items-center justify-center p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
                            >
                                {isOpen ? (
                                    <ImCross
                                        size={16}
                                        className="text-primary"
                                    />
                                ) : (
                                    <TiThMenu
                                        size={16}
                                        className="text-primary"
                                    />
                                )}
                            </span>
                        )}

                        {/* {backButton && (
                <Link
                href={backButtonHref}
                className="flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
                >
                <ArrowLeft size={16} className="text-primary" />
                </Link>
            )} */}

                        {/* {leadingAccessory && <>{leadingAccessory}</>} */}

                        <h2
                            style={
                                // magicTitle
                                //     ? {
                                //         transform: `translateY(${offset}%)`,
                                //         opacity: `${opacity}`,
                                //     }
                                //     :
                                {}
                            }
                            className="text-sm font-bold text-primary transform-gpu line-clamp-1"
                        >
                            {title}
                        </h2>
                    </span>

                    {/* {trailingAccessory && <>{trailingAccessory}</>} */}
                </div>

                <div>{children}</div>
            </div>
        </>
    )
}
