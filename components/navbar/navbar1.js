/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import arrowDown from "../../public/images/dropdown-icon.png"
import Image from 'next/image'
import Logo from "../../public/images/fluxlabs-logo.png"
import Rabbit from "../../public/images/rabbit.png"

export function NavBar1(){

    // const [show, setShow] = useState(false);
    // const showDropdown = (e)=>{
    //     setShow(!show);
    // }
    // const hideDropdown = e => {
    //     setShow(false);
    // }

    // const [navBar, setNavBar] = useState(false);

  
    // useEffect(() => {
    //   const changeBackground = () =>{
    //     if(window.scrollY >= 50){
    //      setNavBar(true);
    //     } else{
    //      setNavBar(false);
    //     }
    //  };
 
    //  window.addEventListener('scroll', changeBackground);
    // });

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleLinkClick = () => {
        setExpanded(false);
    };
  
  

    return(
        <React.Fragment>
             <div className="d-none d-lg-block">
             <div className="navbar2">
           <Navbar className={styles.navBar1} expand="lg"  collapseOnSelect variant="dark" fixed="top">    
             <Container>
                <Navbar.Brand>
                    <Link href={'#home'} className={styles.link4}><Image alt="logo" src={Logo}  style={{width: "auto", height: "35px"}}/></Link>
                    </Navbar.Brand>
                  
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Navbar.Brand>
                      <Link href={'/'} className={styles.nav2Link}>Home</Link>
                    </Navbar.Brand>
                    <Navbar.Brand>
                      <Link href={'#about'}  className={styles.nav2Link}>About</Link>
                    </Navbar.Brand> 
                    <Navbar.Brand>
                      <Link href={'#contact'}  className={styles.nav2Link}>Contact</Link>
                    </Navbar.Brand>       
                </Nav>
                <Nav className="mr-auto">
                    <Navbar.Brand>
                      <Link href={'/apply'} className={styles.nav2LinkBtn}>APPLY NOW</Link>
                    </Navbar.Brand>
                        
                </Nav>
              
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </div>    
             </div>

             <div className="d-block d-lg-none">
            <div className="navbar2">
                <Navbar className={styles.navBar1} expand="lg" collapseOnSelect variant="dark" fixed="top" expanded={expanded}>
                    <Navbar.Brand>
                        <Link href="#home" legacyBehavior>
                            <a className={styles.link4} onClick={handleLinkClick}>
                                <Image alt="logo" src={Logo} style={{ width: "auto", height: "35px" }} />
                            </a>
                        </Link>
                    </Navbar.Brand>
                    <Nav className="mx-auto d-block d-lg-none">
                        <Navbar.Brand>
                            <Link href="/apply" legacyBehavior>
                                <a className={styles.nav2LinkBtn} onClick={handleLinkClick}>APPLY NOW</a>
                            </Link>
                        </Navbar.Brand>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Navbar.Brand>
                                <Link href="/" legacyBehavior>
                                    <a className={styles.nav2Link} onClick={handleLinkClick}>Home</a>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link href="#about" legacyBehavior>
                                    <a className={styles.nav2Link} onClick={handleLinkClick}>About</a>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <Link href="#contact" legacyBehavior>
                                    <a className={styles.nav2Link} onClick={handleLinkClick}>Contact</a>
                                </Link>
                            </Navbar.Brand>
                        </Nav>
                        <Nav className="mr-auto d-none d-lg-block">
                            <Navbar.Brand>
                                <Link href="/apply" legacyBehavior>
                                    <a className={styles.nav2LinkBtn} onClick={handleLinkClick}>APPLY NOW</a>
                                </Link>
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
               
        </React.Fragment>
    )
}