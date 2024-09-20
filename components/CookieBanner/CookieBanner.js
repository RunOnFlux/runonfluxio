import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Script from 'next/script';
import CookieConsent, { getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";

const CookieBanner = () => {
  const [userConsent, setUserConsent] = useState(false);

  const handleAcceptCookies = () => setUserConsent(true);

  const handleDecline = () => {
    resetCookieConsentValue("runonflux-consent");
    setUserConsent(false);
  };

  useEffect(() => {
    const readConsent = getCookieConsentValue("runonflux-consent");
    if (readConsent === 'true') setUserConsent(true);
  }, [])

  return (
    <>
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

      {userConsent && (
        <>
          <Script 
            src="https://www.googletagmanager.com/gtag/js?id=G-KTKEYE3YMN"
            strategy="afterInteractive" 
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-KTKEYE3YMN');
            `}
          </Script>
        </>
      )}
    </>
  )
}

export default CookieBanner