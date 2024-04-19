import SyntaxHighlighter from 'react-syntax-highlighter'

export function CodeBlock({
    text,
    language,
    ...rest
}: {
    text: string
    language: string
    [key: string]: any
}) {
    return (
        <SyntaxHighlighter
            showLineNumbers={true}
            useInlineStyles={false}
            language={language}
            wrapLongLines
            {...rest}
        >
            {text}
        </SyntaxHighlighter>
    )
}
