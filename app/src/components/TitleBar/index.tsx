import React from 'react'

import Link from 'next/link'

import { FaArrowLeft } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { TiThMenu } from 'react-icons/ti'

import { GlobalNavigationContext } from '../../contexts/GlobalNavigationContext'

export interface TitleBarProps {
    title: string
    globalMenu?: boolean
    backButton?: boolean
    backButtonHref?: string
    magicTitle?: boolean
    titleRef?:
        | React.MutableRefObject<HTMLParagraphElement>
        | React.MutableRefObject<null>
        | null
    scrollContainerRef?:
        | React.MutableRefObject<HTMLDivElement>
        | React.MutableRefObject<null>
        | null
    children?: React.ReactNode
    leadingAccessory?: React.ReactNode
    trailingAccessory?: React.ReactNode
}

export function TitleBar({
    title,
    globalMenu = true,
    backButton = false,
    backButtonHref = '',
    magicTitle = false,
    titleRef = null,
    scrollContainerRef = null,
    children = null,
    leadingAccessory = null,
    trailingAccessory = null,
}: TitleBarProps): React.ReactElement {
    const { isOpen, setIsOpen } = React.useContext(GlobalNavigationContext)
    const [currentScrollOffset, _setCurrentScrollOffset] = React.useState(0)
    const [offset, setOffset] = React.useState(200)
    const [opacity, _setOpacity] = React.useState(0)

    const [initialTitleOffsets, _setInitialTitleOffsets] = React.useState({
        top: 0,
        bottom: 0,
    })

    const initialTitleOffsetsRef = React.useRef(initialTitleOffsets)
    const setInitialTitleOffsets = (data) => {
        initialTitleOffsetsRef.current = data
        _setInitialTitleOffsets(data)
    }

    const opacityRef = React.useRef(opacity)
    const setOpacity = (data) => {
        opacityRef.current = data
        _setOpacity(data)
    }

    const currentScrollOffsetRef = React.useRef(currentScrollOffset)
    const setCurrentScrollOffset = (data) => {
        currentScrollOffsetRef.current = data
        _setCurrentScrollOffset(data)
    }

    const handler = React.useCallback(() => {
        if (!scrollContainerRef?.current) return
        const shadowOpacity = scrollContainerRef.current.scrollTop / 200
        setCurrentScrollOffset(shadowOpacity > 0.12 ? 0.12 : shadowOpacity)

        if (!titleRef?.current || !initialTitleOffsetsRef?.current) return

        const titleTop = titleRef.current.getBoundingClientRect().top - 48
        const titleBottom = titleRef.current.getBoundingClientRect().bottom - 56
        const initialOffsets = initialTitleOffsetsRef.current

        const offsetAmount =
            parseFloat((titleBottom / initialOffsets.bottom).toFixed(2)) * 100

        const opacityOffset =
            parseFloat((titleTop / initialOffsets.top).toFixed(2)) * -1

        setOffset(Math.min(Math.max(offsetAmount, 0), 100))
        setOpacity(opacityOffset)
    }, [title, titleRef, scrollContainerRef])

    React.useEffect(() => {
        scrollContainerRef?.current?.addEventListener('scroll', handler)
        return () =>
            scrollContainerRef?.current?.removeEventListener('scroll', handler)
    }, [title, titleRef, scrollContainerRef])

    React.useEffect(() => {
        if (!titleRef?.current || !scrollContainerRef?.current) return
        scrollContainerRef.current.scrollTop = 0
        setOpacity(0)
        setInitialTitleOffsets({
            bottom: titleRef.current.getBoundingClientRect().bottom - 56,
            top: titleRef.current.getBoundingClientRect().top - 48,
        })
    }, [title, titleRef, scrollContainerRef])

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

                        {backButton && (
                            <Link
                                href={backButtonHref}
                                className="flex items-center justify-center p-2 rounded-md text-primary hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
                            >
                                <FaArrowLeft className="text-primary" />
                            </Link>
                        )}

                        {leadingAccessory && <>{leadingAccessory}</>}

                        <h2
                            style={
                                magicTitle
                                    ? {
                                          transform: `translateY(${offset}%)`,
                                          opacity: `${opacity}`,
                                      }
                                    : {}
                            }
                            className="text-sm font-bold text-primary transform-gpu line-clamp-1"
                        >
                            {title}
                        </h2>
                    </span>

                    {trailingAccessory && <>{trailingAccessory}</>}
                </div>

                <div>{children}</div>
            </div>
        </>
    )
}
