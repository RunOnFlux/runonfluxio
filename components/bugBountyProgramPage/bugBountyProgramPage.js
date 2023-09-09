import React from "react"
import styles from "./index.module.css";
import Table from 'react-bootstrap/Table';
export function BugBountyProgramPage(){
   return(
    <React.Fragment>
        <section className={styles.section1}>
            <div className="container">
            <div className="row">
                    <div className="col-12">
                    <h2 className="mb-4">Flux bug bounty program</h2>
                    <p>The Flux Community and Foundation are happy to announce the Flux bug bounty program to reward security researchers and developers who invest their time and effort into finding bugs or exploits in Flux.</p>
                    </div>
                    </div>
            </div>
            </section>

            <section className={styles.section2}>
                <div className="container">
                <div className="row mb-4">
                        <div className="col-12">
                        <h3 className="mb-2">What can you earn?</h3>
                        <p>All bugs will be evaluated according to the CVSS scoring scale and rewarded accordingly. The CVSS levels are:</p>
                        </div>
                        </div>
                        <div className="row">
                        <Table responsive className={styles.table}>
                            <thead>
                                <tr>
                                <th>Severity</th>
                                <th>CVSS Score</th>
                                <th>Reward</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Critical</td>
                                <td>9.0-10</td>
                                <td>500-1000 Flux</td>
                         
                                </tr>
                                <tr>
                                <td>High</td>
                                <td>7.0-8.9</td>
                                <td>250-500 Flux</td>
                                </tr>
                                <tr>
                                <td>Medium</td>
                                <td>4.0-6.9</td>
                                <td>150-500 Flux</td>
                                </tr>
                                <tr>
                                    <td>Low</td>
                                    <td>0.1-3.9</td>
                                    <td>50 Flux</td>
                                </tr>
                                <tr>
                                    <td>None</td>
                                    <td>0</td>
                                    <td>10 Flux</td>
                                </tr>
                            </tbody>
                            </Table>
                </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12">
                            <h3 className="mb-2">How it works</h3>
                            <p className="mb-2">You will receive rewards based on the severity of the issue found if you:</p>
                            <ul>
                                <li>Make all possible effort to not interrupt or degrade our service.</li>
                                <li>Do not attempt to gain unauthorized access to user accounts, assets or information (use your own account/accounts to test against).</li>
                                <li>Do not copy or modify any files or data, including permissions, and do not intentionally view or access any data beyond what is needed to prove the vulnerability.</li>
                                <li>Do not exploit a security issue you discover beyond the point of validation on your own accounts/nodes.</li>
                                <li>Consent to be added to a list published of researchers who have submitted valid security reports.</li>
                                <li>However, should you wish to remain anonymous, we will respect your privacy. You must inform us at the time of submission, and we will not add your name to aforementioned list.</li>
                                <li>We reserve the right to determine timeframes for publishing reports (and accompanying updates) pertaining to each instance. However, we will provide best effort information to you on all such issues.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12">
                            <p className="mb-2">Additionally, in order to qualify for rewards you must adhere to the following responsible disclosure policy:</p>
                            <ul>
                                <li>For Zelcore related issues: exploits and bugs are restricted to your own account or instance of the Zelcore wallet and have been carried out for validation purposes only.</li>
                                <li>For website related issues: No data is removed from the website upon discovery.</li>
                                <li>The Flux Blockchain and nodes: Any and all exploits be confined to a private testnet or regtest for validation purposes. Any code modifications carried out to run exploits need to be disclosed along with the effects for full validation.</li>
                                <li>For the FluxOS distributed operating system, any and all exploits are confined to their own nodes for validation purposes. Should additional nodes be required to fully validate more serious exploits, the Flux team will assist with a private testnet.</li>
                                <li>Submissions can only be made to <a href="#">security@runonflux.io</a> or via direct message to a developer on Discord in either case using the attached <a href="#">PGP keys</a> for encryption is a requirement.</li>
                                <li>Include an email for responses in your report.</li>
                                <li>Adhere to timeframes laid out in initial confirmation of report emails.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12">
                            <p>Please note that we have the right to remove you from the bug bounty program and disqualify you from receiving any bounty rewards if you are in violation of any national, state, or local law or regulation.</p>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-12">
                            <h3 className="mb-2">Qualifying bugs</h3>
                            <p className="mb-2">The following list is by no means exhaustive, so if you have a bug that is not on either the qualifying or non-qualifying lists, report it, it will be covered.</p>
                            <ul>
                                <li>Injection flaws such as SQL, noSQL, Mongodb or OS injection that tricks command interpreter into executing unintended commands without proper authorization.</li>
                                <li>Broken authentication/session management that allows compromise of passwords, keys or session tokens.</li>
                                <li>Sensitive data exposure due to improper protection of data via insecure API or flaw in cryptography implementation.</li>
                                <li>Cross-Site Request Forgery (CSRF) for sensitive functions in a privileged context.</li>
                                <li>Remote Code Execution (RCE).</li>
                                <li>Insecure DIRECT OBJECT REFERENCES.</li>
                                <li>Privilege ESCALATION.</li>
                                <li>Directory TRAVERSAL.</li>
                                <li>Open REDIRECTS.</li>
                                <li>Spoofing enablement.</li>
                                <li>Spoofing enablement.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-12">
                            <h3 className="mb-2">Non-qualifying bugs</h3>
                            <ul>
                                <li>Non-original or previously disclosed/reported bugs (with fixes currently underway).</li>
                                <li>Non-technical attacks such as social engineering, phishing, or physical attacks against entities or infrastructure.</li>
                                <li>Any degrading/damaging the reliability or integrity of our services (such as DDoS attacks, man in the middle attacks, spamming, and similar questionable acts).</li>
                                <li>Any software not directly produced by the Flux team.</li>
                                <li>Domains hosted by third parties (e.g.: Github, Gitlab, etc).</li>
                                <li>Subdomains operated by third parties (e.g: info.runonflux.io).</li>
                                <li>Any Flux branded services operated by third parties.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-12">
                            <h3 className="mb-2">How to report a bug</h3>
                            <p>Send an email using the below <a href="#">PGP keys</a> to <a href="#">security@runonflux.io</a> and no other email address. Failing to use the attached <a href="#">PGP keys</a> for the bug report will invalidate any security issues higher than level 2 on the CVSS scale.</p>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <h3 className="mb-2">Process to follow</h3>
                        <ul>
                            <li>Write up a report on your findings.</li>
                            <li>PGP Encrypt the report with keys from URL.</li>
                            <li>Within 24 hours you will have an acknowledgement.</li>
                            <li>Adhere to timeline and additional information requests from the Flux team outlined in the acknowledgement email.</li>
                            <li>Discuss publication times and names.</li>
                            <li>Collect bounty.</li>
                            <li>Get published.</li>
                        </ul>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-2">PGP key</h3>
                            <div className={styles.fingerPrint}>
                                <h6> -----BEGIN PGP PUBLIC KEY BLOCK----- <br/>
                                    Comment: User-ID: Flux Security<br/>
                                    Comment: Fingerprint: F3244FFC7207DB2CAA355DF506139DA3A0B13EC1 <br/><br/>

                                    mQGNBGLPZCQBDACjjaGtugWn32+GnSi17zrqp3fdvJ8PAK7s4NX4Z8mQK+H1iEoa
                                    FygGSpgmWEqEuDmV/yeGxyn9wUmvV7ZF7rVqWG64v3BU/VDGnZDTOaTllFjCTFTw
                                    AqO40YcotTMcZulPqQGLNFTbnfl4hMMzIevF9/AtccAUIMJlD14PiUWPh27A56f1
                                    wgsYgY2qQb8+huC6crLXUbWLN7vxUrVEynMif9t1dDH40FD2iRGUpx0ylD5EYsq2
                                    GuStEzq/G/3cZLXdE5AJ9ZraymKXaAtHMQY6lbgSuPIr7ChDoy864OEAcS5on2J7
                                    yaqAfspWegAGa6TqDRVhuVLHorbU5xRCORUDVXIbhXFqAuicHl+ZNqtNFjH0hf4w
                                    f5jU8FE+P4sinWU7dIXg/0qkb7MqhvhnRofwy17pQgNq239p28lP6j4EYkMfkdK1
                                    adnPCHGOGzIFdqptmdEictHBxAYRtyiVooL4C58jKz2VNfd4a3cS08JKkoZmZbJw
                                    Ns1RchnTokMQoK8AEQEAAbQlRmx1eCBTZWN1cml0eSA8c2VjdXJpdHlAcnVub25m
                                    bHV4LmlvPokB1AQTAQgAPhYhBPMkT/xyB9ssqjVd9QYTnaOgsT7BBQJiz2QkAhsD
                                    BQkPDH2sBQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJEAYTnaOgsT7BTngL/A4T
                                    GNOqjJGRRH4pE/F49siZ+7n9z1jpOdDdWNxLd8HXeY7XzPROSz2QX3ZKlHEShayG
                                    cmysAD2TCid6AAGi3YBXzhWZt67Us1zFN8TehBdWnr60dEiLhxP/aBds83FCfLyN
                                    MlTgyzB8zY4o8ybj903mNAZnqpc4q0/bZCnStw5vVVvNKL1kmsJxu4TiIV7lZuFc
                                    JYz330BCC0iQg+xtNrozqfgi+gSExq4QpuYHGHHmV2PzgInasYeYmUUG6N+ymxVo
                                    +bbwj4ypTm4X36XOomiOImWGV5XSZXh0n3Rw0GIgyyDGCJGNCmd7jL2oTSdz93wd
                                    Qnz1zObUhrCW/FZRkf+LuXLsk0akcgd/qQPQ54rwUwSzbCKxwqijDrx/qEKVil++
                                    /6aq6MdN26gjZkd86ehbrfgkemFX0suWkLxSemS4TDEeYJu9fVuMIzgflELf8rk/
                                    4rRfLaSu7OVxX8wN6gpSz5N93A97mkoWRh18UZIn+r2qQgtxSN1pClQxYRG1MrkB
                                    jQRiz2QkAQwAwJ3o5xaozz3/iYE1gSeAwKYCQvzbrIqzcs/C1QmI35QpQ6JLytZ9
                                    I2ojEk32T8H6/VWTm50o+fcDGUi1a5CL+p6ENv1epK5vqTBs2uPZMUop2ZwSgRgf
                                    KVfsb3TSqiq/mpbD5HOZTMDkekVKyIZr3uX6cAjfqM6flcb3vnw/ogdJZD9CKXGv
                                    di+ew+xl9MnYdcuhcOpN2RQMfoW28uLMKQaDh5aFag27oVdF2rTTlzwLsXTH7DqO
                                    vJjD4UchlAGGIifWV6Y33jCepNoRNqyVs0QMTEgkeobJO3tsMNVrbJ+l8RytKG13
                                    5G9oJqxjzAu/9CcSvUT6tuzWSwp7+Ck4O0uRpdPe+DGq+5bLKk1raC48e97LPS7v
                                    f7J6ouRolCn9xNwxOHRkEbsEK852bzp+a6FI3JJwY/2BySffJjsrsbm9eIJeB5ot
                                    MC1cg/XyH7kVUDF9mRos5w+eTvyCsrevi97QSw1KXXm6oo//vXNCMS2DIRN+8IzB
                                    7S6xL67MBhaxABEBAAGJAbwEGAEIACYWIQTzJE/8cgfbLKo1XfUGE52joLE+wQUC
                                    Ys9kJAIbDAUJDwx9rAAKCRAGE52joLE+wTp7C/9Ch/5PPi/Gkn8LX/tTPITaQWg1
                                    oOQaJn1LN+vi9OoNeKU+/W4mWlJI1k6SdLR4KWJf4vrl6ScWDkQ0Lr5F5F4g3DBP
                                    ZGHR21zcqQuJtuNWMmjrIKaek9KV3zV6LuypVUz1T77Kd3fT708ApyT4OHw6UyiM
                                    prZnm4MnWEmzPzcjh55d2nf9fuZmXaQZk7UJIIf46zAfikFJ8EIFCBd7GwtNVEOE
                                    YmQIOw6XoOu1Er9U/gin2Twv2QA/K/n7gwg3Ag4qBsJjRs6HcIhrl0b2Akj+TuQ9
                                    FoUuRAtrrOovgM0uddIJySApevuVjwDY4BJSY/4q2OeZ4q07zDaNByJoXFSgcjDc
                                    z/gvy9uC+A2HCWmJg68b8DyjFV2o2h1Ne7Ya20eTc4rssTV//DyEtQNJ47pppltA
                                    oMzQ2D464k9RFmPdPVVwIJJ/SV4mWhSrTHr6DRtLP3f0qouIHKaYQZxjWYbfawfd
                                    tzpTvatifFlvMouyFUaglUM26s685NAcKfEFgJw=
                                    =rgC5
                                    <br/><br/>
                                    -----END PGP PUBLIC KEY BLOCK----- </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </React.Fragment>
   )
}