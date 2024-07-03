import type { Config, Layout, PlotData } from 'plotly.js'
import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'

interface PlotlyBlockProps {
    src: string
}

interface PlotJSON {
    data: Array<Partial<PlotData>>
    layout: Partial<Layout>
    config: Partial<Config>
}

const PlotlyBlock: React.FC<PlotlyBlockProps> = ({ src }) => {
    const [plotData, setPlotData] = useState<PlotJSON | null>(null)

    useEffect(() => {
        const fetchPlotData = async (): Promise<void> => {
            try {
                const response = await fetch(src)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const json: PlotJSON = await response.json()
                setPlotData(json)
            } catch (error) {
                console.error('Error fetching the plot data:', error)
            }
        }

        void fetchPlotData()
    }, [src])

    if (!plotData) {
        return <div>Loading...</div>
    }

    return (
        <Plot
            data={plotData.data}
            layout={plotData.layout}
            config={plotData.config}
        />
    )
}

export default PlotlyBlock
