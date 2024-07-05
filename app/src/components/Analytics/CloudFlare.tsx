const CloudFlareAnalytics = () => {
    return (
        <div>
            {/* Default CloudFlare code for Digital Madness https://digital-madness.in/ */}
            <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "64279c3841a2410d93fe95af2c0c3b1c"}'
            ></script>
            {/* End of CloudFlare Code */}
        </div>
    )
}

export default CloudFlareAnalytics
