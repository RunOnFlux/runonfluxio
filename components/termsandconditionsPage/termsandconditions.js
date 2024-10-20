import React from "react"
import styles from "./index.module.css"

export function TermsAndConditionsPage(){
    return(
     <React.Fragment>
         <section className={styles.section1}>
             <div className="container">
             <div className="row">
                     <div className="col-12">
                     <h2 className="mb-4">Terms and Conditions</h2>
                     <p>Please read these Terms and Conditions (“Terms”, “Terms and Conditions”) carefully before using the https://www.runonflux.com website (the “Service”) operated by Flux (“us”, “we”, “our”). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. This Terms and Conditions agreement for Flux is powered by TermsFeed.</p>
                     </div>
                     </div>
             </div>
             </section>
 
             <section className={styles.section2}>
                 <div className="container">
                 <div className="row mb-4">
                         <div className="col-12">
                         <h3 className="mb-2">Links To Other Web Sites</h3>
                         <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Flux. Flux has no control over, and assumes no responsibility for; the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Flux shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
                         </div>
                         </div>

                         <div className="row mb-4">
                         <div className="col-12">
                         <h3 className="mb-2">Governing Law</h3>
                         <p>These Terms shall be governed and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
                         </div>
                         </div>

                         <div className="row mb-4">
                         <div className="col-12">
                         <h3 className="mb-2">Changes</h3>
                         <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
                         </div>
                         </div>

                         <div className="row mb-4">
                         <div className="col-12">
                         <h3 className=" mb-2">Contact Us</h3>
                             <p>If you have any questions about these Privacy Policy, please <a style={{textDecoration: "none"}} href="mailto:info@runonflux.com">contact us</a>.</p>
                         </div>
                     </div>
                
                 </div>
             </section>
 
              </React.Fragment>
    )
 }