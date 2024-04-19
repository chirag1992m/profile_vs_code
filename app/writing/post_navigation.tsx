import { LuBrain } from 'react-icons/lu'

import { getPostMedata, type postMetadata } from './posts'

import { type SideBarNavigationSectionProps } from '../src/components/SideBar/SideBarNavigation'
import { type SideBarNavigationLinkProps } from '../src/components/SideBar/SideBarNavigationLink'

export const getPostNavigationSections =
    (): SideBarNavigationSectionProps[] => {
        const postsMetadata = getPostMedata()
        const categories = postsMetadata.reduce((x, y) => {
            ;(x[y.category] = x[y.category] || []).push(y)
            return x
        }, {})

        const postsNavigationSections: SideBarNavigationSectionProps[] = []
        for (const [key, value] of Object.entries(categories)) {
            const section: SideBarNavigationSectionProps = {
                links: value?.map(
                    (
                        postMetadata: postMetadata
                    ): SideBarNavigationLinkProps => {
                        return {
                            href: `/writing/${postMetadata.slug}`,
                            label: postMetadata.slug,
                            icon: <LuBrain></LuBrain>,
                            trailingIcon: null,
                            // TODO: What is this used for?
                            // trailingAction: Action,
                            isExternal: false,
                        }
                    }
                ),
                label: key,
            }

            postsNavigationSections.push(section)
        }

        return postsNavigationSections
    }
