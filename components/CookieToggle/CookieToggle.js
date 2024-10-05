import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { getCookieConsentValue } from 'react-cookie-consent';
import jsCookie from 'js-cookie'; 

const CookieToggle = () => {
  const [userConsent, setUserConsent] = useState(false);

  const updateCookie = (checkedValue) => {
    try {
      if (checkedValue === true) jsCookie.set("runonflux-consent", "true", {expires: 365});    
      if (checkedValue === false) {
        jsCookie.set("runonflux-consent", "false", {expires: 365});
        jsCookie.remove("_ga");
        jsCookie.remove("_ga_KTKEYE3YMN");
      }    
      setUserConsent(checkedValue);
    } catch (error) {
      console.log("failed to update cookie settings");
    }
  }

  useEffect(() => {
    const readConsent = getCookieConsentValue("runonflux-consent");
    if (readConsent === 'true') setUserConsent(true);
  }, [])

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "10px 50px", alignContent: "center" }}>
      <Form>
        <Form.Check
          type="switch"
          id="essential"
          label="Essential Cookies"
          checked={true}
          disabled={true}
          size={"large"}
          style={{ fontSize: "30px" }}
        />
      </Form>
      <Form>
        <Form.Check
            type="switch"
            id="tracking"
            label="Tracking Cookies"
            checked={userConsent}
            style={{ fontSize: "30px" }}
            onChange={(e) => updateCookie(e.target.checked)}
          />
      </Form>
    </div>
  )
}

export default CookieToggle