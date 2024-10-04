import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import CookieToggle from "../CookieToggle/CookieToggle";

const CookieBanner = () => {
  const [userConsent, setUserConsent] = useState(false);
  const [manageCookies, setManageCookies] = useState(false);
  const handleAcceptCookies = () => setUserConsent(true);

  const handleDecline = () => {
    setManageCookies(true);
    setUserConsent(false);
  };

  useEffect(() => {
    const readConsent = getCookieConsentValue("runonflux-consent");
    if (readConsent === 'true') setUserConsent(true);
  }, [manageCookies])

  return (
    <>  
      {!manageCookies && (
        <CookieConsent
          style={{ background: "#2B373B", alignItems: "center", flexDirection: "column" }}
        contentStyle={{ flex: "0 1 auto", justifyContent: "center", margin: "5px" }}
        location="bottom"
        buttonText="Accept All"
        buttonStyle={{ backgroundColor: "#2B61D1", color: "white", fontSize: "13px" }}
        cookieName="runonflux-consent"         
        enableDeclineButton
        declineButtonText="Manage Cookies"
        declineButtonStyle={{ backgroundColor: "#98A7B9", fontSize: "13px", color: "white" }}
        declineCookieValue="false"
        expires={150}
        flipButtons
        onAccept={handleAcceptCookies}
        onDecline={handleDecline}
      > 
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxWidth: "700px" }}>
          <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All" you consent to our use of cookies to track your experience on our site.</p>
          <Link href={"/privacyPolicy"} style={{}}>Privacy Policy</Link>
          </div>        
          </CookieConsent>
      )}

      {manageCookies && (
        <div style={{ position: "sticky", bottom: "0", left: "0", right: "0", backgroundColor: "white", padding: "10px", borderTop: "1px solid #e0e0e0" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <CookieToggle />
            <button style={{ backgroundColor: "#2B61D1", color: "white", fontSize: "13px", padding: "10px 20px", borderRadius: "5px", marginTop: "10px" }} onClick={() => setManageCookies(false)}>CONFIRM</button>
          </div>
        </div>
      )}

      {userConsent && (
        <>
          <Script 
            src="https://www.googletagmanager.com/gtag/js?id=G-KTKEYE3YMN"
            strategy="afterInteractive" 
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-KTKEYE3YMN');
            `}
          </Script>
          <Script id="linkedin" strategy="afterInteractive">
            {`_linkedin_partner_id = "6548244"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `}
          </Script>
          <Script id="linkedin2" strategy="afterInteractive">
            {`(function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
          </Script>
          <noscript>
            <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=6548244&fmt=gif" />
          </noscript>
        </>
      )}
    </>
  )
}

export default CookieBanner