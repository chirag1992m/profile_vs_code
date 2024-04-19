'use client'
import * as React from 'react'

import { ListContainer } from '../ListDetail/ListContainer'
import { TitleBar } from '../TitleBar'

import { usePathname } from 'next/navigation'
import { type postMetadata } from '../../../writing/posts'
import { WritingListItem } from './WritingListItem'

interface WritingListProps {
    categorizedPosts: Record<string, postMetadata[]>
}

export const WritingList = ({
    categorizedPosts,
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
                {categorizedPosts &&
                    Object.entries(categorizedPosts).map(
                        ([category, posts]) => {
                            return (
                                <ul
                                    key={`wl_${category}`}
                                    className="space-y-1"
                                >
                                    <h4
                                        key={`wl_cat_${category}`}
                                        className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
                                    >
                                        {category}
                                    </h4>
                                    {posts.map((post, i) => {
                                        const active = currentPathname.endsWith(
                                            post.slug
                                        )

                                        return (
                                            <WritingListItem
                                                post={post}
                                                key={`wl_${i}_${post.slug}`}
                                                active={active}
                                            />
                                        )
                                    })}
                                </ul>
                            )
                        }
                    )}
            </div>
        </ListContainer>
    )
}
