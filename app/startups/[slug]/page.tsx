import React from 'react'

import { ListDetailView } from '../../src/components/ListDetail/ListDetailView'
import { WritingDetailView } from '../../src/components/WritingListDetail/WritingDetailView'
import { WritingList } from '../../src/components/WritingListDetail/WritingList'
import {
    getAllPostsMetadata,
    getCategorizedPosts,
    getWritingPost,
} from '../posts'

export function generateStaticParams() {
    const posts = getAllPostsMetadata()

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
    const post = getWritingPost(params.slug)

    return (
        <ListDetailView
            list={
                <WritingList
                    categorizedPosts={getCategorizedPosts()}
                ></WritingList>
            }
            hasDetail={Boolean(post)}
            detail={
                post && (
                    <WritingDetailView
                        postMetadata={post.postMetadata}
                        postContent={post.postContent}
                    ></WritingDetailView>
                )
            }
        />
    )
}
