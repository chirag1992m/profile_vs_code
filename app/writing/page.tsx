import React from 'react'

import { ListDetailView } from '../src/components/ListDetail/ListDetailView'
import { WritingList } from '../src/components/WritingListDetail/WritingList'
import { getPostMedata } from './posts'

export default function Page(): React.ReactElement {
    return (
        <ListDetailView
            list={<WritingList posts={getPostMedata()}></WritingList>}
            hasDetail={false}
            detail={null}
        />
    )
}
