'use client'
import * as React from 'react'

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
                    <Detail.Title ref={titleRef}>
                        {postMetadata.title}
                    </Detail.Title>
                    <span
                        title={postMetadata.date}
                        className="text-tertiary inline-block leading-snug"
                    >
                        {postMetadata.substitle}
                    </span>
                </Detail.Header>

                <article className="prose lg:prose-md">
                    <MarkdownRenderer>{postContent}</MarkdownRenderer>
                </article>
            </Detail.ContentContainer>
        </Detail.Container>
    )
}
