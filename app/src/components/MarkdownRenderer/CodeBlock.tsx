import SyntaxHighlighter from 'react-syntax-highlighter'
import PlotlyBlock from './PlotlyBlock'

export function CodeBlock({
    text,
    language,
    ...rest
}: {
    text: string
    language: string
    [key: string]: any
}) {
    if (language === 'plotly') {
        return <PlotlyBlock src={text} />
    } else {
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
}
