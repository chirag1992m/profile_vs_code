import React from 'react'
import { AboutMe } from './about_me/amoutMe'
import { ListDetailView } from './src/components/ListDetail/ListDetailView'

export default function Page(): React.ReactElement {
    return (
        <ListDetailView
            list={null}
            detail={<AboutMe></AboutMe>}
            hasDetail
        ></ListDetailView>
    )
}
