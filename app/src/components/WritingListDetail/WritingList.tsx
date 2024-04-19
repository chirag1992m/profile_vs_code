'use client'
import * as React from 'react'

import { ListContainer } from '../ListDetail/ListContainer'
import { TitleBar } from '../TitleBar'

import { usePathname } from 'next/navigation'
import { type postMetadata } from '../../../writing/posts'
import { WritingListItem } from './WritingListItem'

interface WritingListProps {
    posts: postMetadata[]
}

export const WritingList = ({
    posts,
}: WritingListProps): React.ReactElement => {
    const currentPathname = usePathname()
    const [scrollContainerRef, setScrollContainerRef] = React.useState(null)

    return (
        <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
            <TitleBar
                scrollContainerRef={scrollContainerRef}
                title="Writing Posts"
            />

            <div className="lg:space-y-1 lg:p-3">
                {posts.map((post, i) => {
                    const active = currentPathname.endsWith(post.slug)

                    return (
                        <WritingListItem
                            post={post}
                            key={`wl_${i}_${post.slug}`}
                            active={active}
                        />
                    )
                })}
            </div>
        </ListContainer>
    )
}
