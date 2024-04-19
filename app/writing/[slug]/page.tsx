import React from 'react'
import Markdown from 'markdown-to-jsx'
import { getPostContent, getPostMedata } from '../posts'

export function generateStaticParams() {
    const posts = getPostMedata()
    // console.log(posts.map((post) => {return `/writing/${post}`}))
    const paths = posts.map((post) => ({
        slug: post.slug,
      }))

    return paths
}


export default function Page({
    params,
}: {
    params: { slug: string }
}): React.ReactElement {
    return (
        <div className="flex w-full">
            <Markdown>{getPostContent(params.slug)}</Markdown>
        </div>
        // <div className="flex w-full">
        //     <div className="flex h-full w-full items-center justify-center">
                
        //     </div>
        // </div>
    )
}
