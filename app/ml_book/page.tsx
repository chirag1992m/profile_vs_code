import React from 'react'

import { ListDetailView } from '../src/components/ListDetail/ListDetailView'
import { WritingList } from '../src/components/WritingListDetail/WritingList'

export default function Page(): React.ReactElement {
    return (
        <ListDetailView
            list={
                <WritingList
                    title="Machine Learning Book"
                    categorizedPosts={{}}
                ></WritingList>
            }
            hasDetail={false}
            detail={null}
        />
    )
}
