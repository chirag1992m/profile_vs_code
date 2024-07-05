import * as React from 'react'
import CloudFlareAnalytics from './CloudFlare'
import StatCounter from './StatCounter'

export default function SiteAnalytics(): React.ReactElement {
    return (
        <>
            <CloudFlareAnalytics />
            <StatCounter />
        </>
    )
}
