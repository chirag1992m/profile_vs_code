'use client'
import * as React from 'react'

const globalNavigationContext = {
    isOpen: false,
    setIsOpen: (val: boolean) => {},
}

export const GlobalNavigationContext = React.createContext(
    globalNavigationContext
)
