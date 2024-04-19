'use client'
import * as React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'

import { education, workHistory } from './information'

import { Detail } from '../src/components/ListDetail/Detail'
import { TitleBar } from '../src/components/TitleBar'

import seattlePic from '../../public/static/seattle.webp'

const SectionContainer: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    return (
        <div
            className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
            {...props}
        />
    )
}

const SectionTitle: React.FC<React.HTMLProps<HTMLHeadingElement>> = (props) => {
    return (
        <h4
            className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
            {...props}
        />
    )
}

const SectionContent: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
    return <div className="col-span-10" {...props} />
}

interface TableRowProps {
    href: string
    title: string
    date: string
    subtitle?: string
}

const TableRow: React.FC<TableRowProps> = ({ href, title, subtitle, date }) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={href}
            className="flex items-center space-x-4 group"
        >
            <strong className="flex-none font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
                {title}
            </strong>
            <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
            {subtitle && (
                <span className="flex-none text-tertiary">{subtitle}</span>
            )}
            {date && (
                <span className="flex-none font-mono text-quaternary">
                    {date}
                </span>
            )}
        </a>
    )
}

export function AboutMe(): React.ReactElement {
    const scrollContainerRef = React.useRef(null)
    const titleRef = React.useRef(null)

    return (
        <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
            <TitleBar
                magicTitle
                titleRef={titleRef}
                scrollContainerRef={scrollContainerRef}
                title="About Me"
            />

            {/* Keep this div to trigger the magic scroll */}
            <div className="p-4" ref={titleRef} />

            <Detail.ContentContainer>
                <div className="pb-24 space-y-8 md:space-y-16">
                    <SectionContainer>
                        <SectionTitle />
                        <SectionContent>
                            <div className="prose text-primary">
                                <p>
                                    Hey, I&apos;m Chirag👋. I&apos;m an
                                    engineer, researcher,{' '}
                                    <Link href="/writing" passHref>
                                        writer
                                    </Link>
                                    , and a full-time{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/chirag1992m"
                                    >
                                        software tinkerer
                                    </a>
                                    . Currently, I&apos;m deeply involved in
                                    building two exciting projects: &nbsp;
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://actionsync.ai"
                                        className="!text-orange-500"
                                    >
                                        ActionSync
                                    </a>
                                    &nbsp;and{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://nestaura.ai"
                                        className="!text-orange-500"
                                    >
                                        NestAura
                                    </a>
                                    .
                                </p>
                                <p>
                                    ActionSync helps individuals and
                                    small-medium businesses use generative AI by
                                    automating software tasks through language
                                    and an intuitive drag-and-drop UI. NestAura,
                                    on the other hand, allows users to keep
                                    track of their healthcare documents and
                                    vitals and receive daily personalized health
                                    nudges.
                                </p>
                                <p>
                                    I&apos;m working at Sift Science, where I
                                    improve and scale machine-learning models
                                    for fraud detection in payment systems.
                                    Previously, I spent four years at PathAI,
                                    where I trained and developed neural network
                                    systems for cancer detection from pathology
                                    slides.
                                </p>
                            </div>
                        </SectionContent>
                    </SectionContainer>

                    <SectionContainer>
                        <SectionTitle>Where</SectionTitle>
                        <SectionContent>
                            <Image
                                priority
                                src={seattlePic}
                                width={800}
                                className="rounded-2xl"
                                quality={100}
                                alt="Illustration of Seattle with comical regional stereotypes"
                            />
                            <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                                <FaMapMarkerAlt size={12} />
                                <span>Seattle, WA</span>
                            </p>
                        </SectionContent>
                    </SectionContainer>

                    <SectionContainer>
                        <SectionTitle>Experience</SectionTitle>
                        <SectionContent>
                            <div className="flex flex-col space-y-3">
                                {workHistory.map((job) => (
                                    <TableRow
                                        href={job.href}
                                        title={job.title}
                                        subtitle={job.subtitle}
                                        date={job.date}
                                        key={job.href}
                                    />
                                ))}
                            </div>
                        </SectionContent>
                    </SectionContainer>

                    <SectionContainer>
                        <SectionTitle>Education</SectionTitle>
                        <SectionContent>
                            <div className="flex flex-col space-y-3">
                                {education.map((s) => (
                                    <TableRow
                                        href={s.href}
                                        title={s.title}
                                        date={s.date}
                                        key={s.href}
                                    />
                                ))}
                            </div>
                        </SectionContent>
                    </SectionContainer>
                </div>
            </Detail.ContentContainer>
        </Detail.Container>
    )
}
