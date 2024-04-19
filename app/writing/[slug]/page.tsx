import React from 'react'

import Markdown from 'markdown-to-jsx'

import { ListDetailView } from '../../src/components/ListDetail/ListDetailView'
import { WritingList } from '../../src/components/WritingListDetail/WritingList'
import { getPostContent, getPostMedata } from '../posts'

export function generateStaticParams() {
    const posts = getPostMedata()

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
        <ListDetailView
            list={<WritingList posts={getPostMedata()}></WritingList>}
            hasDetail={false}
            detail={<Markdown>{getPostContent(params.slug)}</Markdown>}
        />
    )
}
