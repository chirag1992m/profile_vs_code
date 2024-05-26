'use client'
import * as React from 'react'

import Image from 'next/image'

import { type postMetadata } from '../../../writing/posts'
import { Detail } from '../ListDetail/Detail'
import { TitleBar } from '../TitleBar'

import { MarkdownRenderer } from '../MarkdownRenderer'

export interface WritingDetailProps {
    postMetadata: postMetadata
    postContent: string
}

export const WritingDetailView: React.FC<WritingDetailProps> = ({
    postMetadata,
    postContent,
}: WritingDetailProps) => {
    const scrollContainerRef = React.useRef(null)
    const titleRef = React.useRef(null)

    return (
        <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
            <TitleBar
                backButton
                globalMenu={false}
                backButtonHref={'/writing'}
                magicTitle
                title={postMetadata.title}
                titleRef={titleRef}
                scrollContainerRef={scrollContainerRef}
                trailingAccessory={null}
            />

            <Detail.ContentContainer>
                <Detail.Header>
                    <Image
                        priority
                        src={postMetadata.cover_image}
                        fill
                        className="rounded-2xl"
                        quality={100}
                        alt={
                            postMetadata.cover_image_prompt
                                ? postMetadata.cover_image_prompt
                                : postMetadata.title
                        }
                    />
                    <Detail.Title ref={titleRef}>
                        {postMetadata.title}
                    </Detail.Title>
                </Detail.Header>

                <article className="prose lg:prose-md mt-20">
                    <MarkdownRenderer>{postContent}</MarkdownRenderer>
                </article>
            </Detail.ContentContainer>
        </Detail.Container>
    )
}
