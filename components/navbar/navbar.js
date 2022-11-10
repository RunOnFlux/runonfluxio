import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";
import arrowDown from "../../public/images/dropdown-icon.png"
import Image from 'next/image'
import Logo from "../../public/images/logo.svg"
export function NavBar(){

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return(
        <React.Fragment>
             <div className="d-none d-lg-block">
            <div className={styles.navbar2}></div>
           <Navbar  expand="lg" fixed="top" collapseOnSelect >
            <Container>
                <Navbar.Brand>
                    <Link href={'/'} className={styles.link4}><Image alt="logo" src={Logo}  height="40px" width="170px"/></Link>
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    
                  <NavDropdown title={
                      <span>Ecosystem <span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown0" 
                    show={show}
                    onMouseEnter={showDropdown} 
                   
                    onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item >
                      <Link href={'/'} className={styles.link} eventKey="1"> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                    content
                     
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                  
                   
                 </NavDropdown>  

                  <NavDropdown title={
                      <span>Discover<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown1" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={2}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        HyperBridge
                       
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                 
                 </NavDropdown> 

                  <NavDropdown title={
                      <span>Explore<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={6}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        HyperLaunch<br/>
                        </div>
                        </Link>
                    </NavDropdown.Item>
                 </NavDropdown> 


                 <NavDropdown title={
                      <span>Community<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={6}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        HyperLaunch<br/>
                        </div>
                        </Link>
                    </NavDropdown.Item>
                 </NavDropdown> 

              

              
                </Nav>

               
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </div>








            <div className="d-block d-lg-none">
            <div className={styles.navbar2}></div>
            <Navbar  expand="lg" fixed="top" collapseOnSelect >
            <Container>
                <Navbar.Brand>
                    <Link href={'/'} className={styles.link4}><Image alt="logo" src={Logo}  height="40px" width="170px"/></Link>
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" >
               
                </Navbar.Toggle>

                

              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mx-auto">
                    
                  <NavDropdown title={
                      <span>Ecosystem<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                   
                  >
                    <NavDropdown.Item eventKey={1}>
                      <Link href={'/'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                      
                      
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey={2}>
                        <Link href={'/#'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                 </NavDropdown>  

                  <NavDropdown title={
                      <span>Discover</span>
                  }
                    id="basic-nav-dropdown" 
                  
                  >
                    <NavDropdown.Item eventKey={3} >
                        <Link href={'#'}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        
                        </div>
                        </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey={4}>
                        <Link href={'#'} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       
                        </div>
                        </Link>
                    </NavDropdown.Item>

                 </NavDropdown> 

                  <NavDropdown title={
                      <span>Explore</span>
                  }
                    id="basic-nav-dropdown" 
                  
                    >
                    <NavDropdown.Item eventKey={10}>
                        <Link href={'#'} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       
                        </div>
                        </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey={11}>
                    <Link  href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       
                        </div>
                        </Link>
                      
                    </NavDropdown.Item>

                 </NavDropdown> 

                  <NavDropdown title={
                      <span>Community</span>
                  }
                    id="basic-nav-dropdown" 
                   
                    >
                    <NavDropdown.Item  eventKey={12}>
                    <Link  href={'#'}  className={styles.link}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       
                        </div>
                        </Link>
                     
                    </NavDropdown.Item>

                 </NavDropdown> 
                </Nav>

              
                </Navbar.Collapse> 

           
            </Container>
        </Navbar>
            </div>
        </React.Fragment>
    )
}