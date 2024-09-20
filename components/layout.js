import React from "react";
import { Footer } from "./footer/footer";
import CookieBanner from "./CookieBanner/CookieBanner";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <CookieBanner />
      <Footer/>
    </>
  );
};
    
export default Layout;