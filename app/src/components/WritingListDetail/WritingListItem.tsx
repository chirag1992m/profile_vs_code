import * as React from 'react'

import { type postMetadata } from '../../../writing/posts'
import { ListItem } from '../ListDetail/ListItem'

interface WritingListItemProps {
    post: postMetadata
    active: boolean
}

export const WritingListItem = React.memo<WritingListItemProps>(
    ({ post, active }) => {
        return (
            <ListItem
                key={`wli_${post.slug}`}
                href="/writing/[slug]"
                as={`/writing/${post.slug}`}
                title={post.title}
                description={post.substitle}
                byline={`${post.category}; ${post.date}`}
                active={active}
            />
        )
    }
)
