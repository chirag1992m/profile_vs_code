import Link from 'next/link'
import Markdown from 'react-markdown'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import linkifyRegex from 'remark-linkify-regex'

import { CodeBlock } from './CodeBlock'

function LinkRenderer({ href, ...rest }: any) {
    // auto-link headings
    if (href.startsWith('#')) {
        return <a href={href} {...rest} />
    }

    if (href.startsWith('@')) {
        // link to a mention
        return <Link href={`/u/${href.slice(1)}`} {...rest} />
    }
    try {
        const url = new URL(href)
        if (url.origin === 'https://digital-madness.in/') {
            return <Link href={href} {...rest} />
        }
        return <a target="_blank" rel="noopener" href={href} {...rest} />
    } catch (e) {
        console.error(e)
        return <a target="_blank" rel="noopener" href={href} {...rest} />
    }
}

function getComponentsForVariant() {
    return {
        a: LinkRenderer,
        pre({ node, inline, className, children, ...props }) {
            const language = /language-(\w+)/.exec(className || '')?.[1]
            return !inline && language ? (
                <CodeBlock
                    text={String(children).replace(/\n$/, '')}
                    language={language}
                    {...props}
                />
            ) : (
                <>{children}</>
            )
        },
        code({ node, inline, className, children, ...props }) {
            const language = /language-(\w+)/.exec(className || '')?.[1]
            return !inline && language ? (
                <CodeBlock
                    text={String(children).replace(/\n$/, '')}
                    language={language}
                    {...props}
                />
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            )
        },
    }
}

export function MarkdownRenderer(props: any) {
    const { children, ...rest } = props

    const components = getComponentsForVariant()

    return (
        <Markdown
            {...rest}
            remarkPlugins={[
                remarkGfm,
                remarkMath,
                linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i),
            ]}
            rehypePlugins={[
                [rehypeSanitize, defaultSchema],
                rehypeSlug,
                [rehypeKatex, { output: 'mathml'}],
                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ]}
            components={components}
        >
            {children}
        </Markdown>
    )
}
