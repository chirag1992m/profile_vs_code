import React from 'react'

import { getPostContent } from '../posts'

export default function Page({
    params,
}: {
    params: { slug: string }
}): React.ReactElement {
    return (
        <div className="flex w-full">
            <div className="flex h-full w-full items-center justify-center">
                {getPostContent(params.slug)}
            </div>
        </div>
    )
}
