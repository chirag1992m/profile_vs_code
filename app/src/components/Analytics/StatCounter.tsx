// To look at analytics, go to website: https://statcounter.com/p13010447/?guest=1
const StatCounter = () => {
    return (
        <div>
            {/* Default Statcounter code for Digital Madness https://digital-madness.in/ */}
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
            var sc_project=13010447; 
            var sc_invisible=1; 
            var sc_security="1b08eb98"; 
          `,
                }}
            ></script>
            <script
                type="text/javascript"
                src="https://www.statcounter.com/counter/counter.js"
                async
            ></script>
            <noscript>
                <div className="statcounter">
                    <a
                        title="Web Analytics"
                        href="https://statcounter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="statcounter"
                            src="https://c.statcounter.com/13010447/0/1b08eb98/1/"
                            alt="Web Analytics"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </a>
                </div>
            </noscript>
            {/* End of Statcounter Code */}
        </div>
    )
}

export default StatCounter
