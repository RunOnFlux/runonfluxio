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
import Logo from "../../public/images/Flux_white_logo.svg"
import Rabbit from "../../public/images/rabbit.png"
import target from "../../public/images/target.svg"
import twitter from "../../public/images/twitter.svg"
import discord from "../../public/images/discord.svg"
import github from "../../public/images/github.svg"
import twitter01 from "../../public/images/twitter01.svg"
import discord01 from "../../public/images/discord01.svg"
import github01 from "../../public/images/github01.svg"
export function NavBar(){

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const [navBar, setNavBar] = useState(false);

  
    useEffect(() => {
      const changeBackground = () =>{
        if(window.scrollY >= 50){
         setNavBar(true);
        } else{
         setNavBar(false);
        }
     };
 
     window.addEventListener('scroll', changeBackground);
    });
  
  

    return(
        <React.Fragment>
             <div className="d-none d-lg-block">
           
            <div className={styles.topNav}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9">
                            <ul>
                                <li> <a href="https://whitepaper.app.runonflux.io/" target="_blank" rel="noreferrer">Whitepaper <Image alt="img" src={target}/></a></li>
                                <li> <a href="https://wiki.runonflux.io/" target="_blank" rel="noreferrer">Wiki<Image alt="img" src={target}/></a></li>
                                <li> <a href="https://gotflux.store/" target="_blank" rel="noreferrer">FluxStore <Image alt="img" src={target}/></a></li>
                                <li> <a href="https://zelcore.io/" target="_blank" rel="noreferrer">Zelcore <Image alt="img" src={target}/></a></li>
                                <li className={styles.navLogo}> <a href="https://twitter.com/RunOnFlux" target="_blank" rel="noreferrer"><Image alt="logo" src={twitter} /></a></li>
                                <li className={styles.navLogo}> <a href="https://discord.io/runonflux" target="_blank" rel="noreferrer"><Image alt="logo" src={discord}/></a></li>
                                <li className={styles.navLogo}> <a href="https://github.com/RunOnFlux" target="_blank" rel="noreferrer"><Image alt="logo" src={github}/></a></li>
                                <li className={styles.navBtn}> <a href="https://support.runonflux.io/">Support</a></li>
                                <li className={styles.navBtn}> <a href="mailto:info@runonflux.io?subject=Contact%20Flux!">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         
           <Navbar className={navBar ? 'navNav active' : 'navNav'} expand="lg"  collapseOnSelect  >    
             <Container>
                <Navbar.Brand>
                    <Link href={'/'} className={styles.link4}><Image alt="logo" src={Logo}  height="40px" width="170px"/></Link>
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                   
                  <NavDropdown title={
                      <span>Ecosystem <span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown0" 
                    show={show}
                    onMouseEnter={showDropdown} 
                   
                    onMouseLeave={hideDropdown}
                  >
                     <div className={styles.dropMenu}>
                    <NavDropdown.Item href='https://cloud.runonflux.io/hello.html'>
                     <Link href='https://cloud.runonflux.io/hello.html' className={styles.link}  eventKey="1" passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}} >
                    Flux Cloud<br/>
                    <div className={styles.sublink}>Flux Cloud presents the next generation of cloud <br/>infrastructure.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item href='https://www.runonflux.io/flux-dapps.html'>
                      <Link href='https://www.runonflux.io/flux-dapps.html' className={styles.link} eventKey="2" passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        DApps
                      <br/>
                    <div className={styles.sublink}>Explore some of the applications running on Flux.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href='https://www.runonflux.io/flux-nodes.html'>
                      <Link href='https://www.runonflux.io/flux-nodes.html' className={styles.link} eventKey="3" passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux Nodes
                     <br/>
                    <div className={styles.sublink}>Learn more about the independently run FluxNodes that<br/> power the Flux network.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item href='https://www.runonflux.io/flux.html'>
                      <Link href='https://www.runonflux.io/flux.html' className={styles.link} eventKey="4" passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux
                     <br/>
                    <div className={styles.sublink}>Our Proof-of-Work cryptocurrency that powers the <br/>Flux ecosystem.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item href='https://www.runonflux.io/parallel.html'>
                      <Link href='https://www.runonflux.io/parallel.html' className={styles.link} eventKey="5" passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Parallel Mining
                     <br/>
                    <div className={styles.sublink}>Flux assets can be mined on other blockchains <br/> that are interchangeable with the main chain.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item href='https://zelcore.io/'>
                      <Link href='https://zelcore.io/' className={styles.link} eventKey="6" passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Zelcore
                     <br/>
                     <div className={styles.sublink}>A multi-asset, multi-platform wallet with a  long list <br/> of market leading features.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item href='https://home.runonflux.io/dashboard/overview'>
                      <Link href='https://home.runonflux.io/dashboard/overview' className={styles.link} eventKey="7" passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Dashboard
                     <br/>
                    <div className={styles.sublink}>Explore the latest stats on the Flux network via the <br/> Flux dashboard.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item href='https://www.runonflux.io/xdao.html'>
                      <Link href='https://www.runonflux.io/xdao.html' className={styles.link} eventKey="8" passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        XDAO
                     <br/>
                    <div className={styles.sublink}>Discover Flux decentralized governance organization.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>
                    </div> 
                   
                 </NavDropdown> 
                

                  <NavDropdown title={
                      <span>Discover<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown1" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                  >
                    <div className={styles.dropMenu}>
                    <NavDropdown.Item href='https://whitepaper.app.runonflux.io/'>
                        <Link href='https://whitepaper.app.runonflux.io/' eventKey={9} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                         Whitepaper
                        <br/>
                        <div className={styles.sublink}>Read the Flux whitepaper and discover the scope of the <br/> project.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://www.runonflux.io/roadmap.html'>
                        <Link href='https://www.runonflux.io/roadmap.html' eventKey={10} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Roadmap
                        <br/>
                        <div className={styles.sublink}>Check out the Flux roadmap and our plans for this year <br/> and beyond.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>

                    <NavDropdown.Item href='https://www.runonflux.io/team.html'>
                        <Link href='https://www.runonflux.io/team.html' eventKey={11} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Team<br/>
                        <div className={styles.sublink}>Meet the members of the fully distributed Flux team.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://www.runonflux.io/partners.html'>
                        <Link href='https://www.runonflux.io/partners.html' eventKey={12} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Partners<br/>
                        <div className={styles.sublink}>Collaboration is at the heart of Flux and  our partners <br/> are key to that.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://wiki.runonflux.io/'>
                        <Link href='https://wiki.runonflux.io/' eventKey={13} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Documentation <br/>
                        <div className={styles.sublink}>Read the Flux docs and get building on Flux today.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://explorer.runonflux.io/'>
                        <Link href='https://explorer.runonflux.io/' eventKey={14} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Block Explorer
                        <div className={styles.sublink}>View blocks mined, statistics, pools, nodes and status of  <br/> the network.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://www.runonflux.io/zero-carbon.html'>
                        <Link href='https://www.runonflux.io/zero-carbon.html' eventKey={15} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Carbon Neutrality <br/>
                        <div className={styles.sublink}>Flux emphasis a Sustainable Future in Blockchain  &amp; <br/> Cloud Computing.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://www.runonflux.io/fluxlabs.html'>
                        <Link href='https://www.runonflux.io/fluxlabs.html' eventKey={16} className={styles.link} passHref={true} >
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        FluxLabs
                        <div className={styles.sublink}>An incubation and acceleration project for blockchain <br/> and technology-based start-ups.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                 </div>
                 </NavDropdown> 

                 <NavDropdown title={
                      <span>Developers<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown1" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                  >
                    <div className={styles.dropMenu}>
                    <NavDropdown.Item href='https://jetpack2.app.runonflux.io/hello.html'>
                        <Link href='https://jetpack2.app.runonflux.io/hello.html' eventKey={17} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        App
                        <br/>
                        <div className={styles.sublink}>Discover how to launch an app on the Flux network.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb'>
                        <Link href='https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb' eventKey={18} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Node
                        <br/>
                        <div className={styles.sublink}>Become a FluxNode operator with our easy to <br/> follow guides.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://www.runonflux.io/mining.html'>
                        <Link href='https://www.runonflux.io/mining.html' eventKey={19} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Miner
                        <br/>
                        <div className={styles.sublink}>Learn how to mine Flux with your GPU and what pools <br/> to join.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item href='https://runonflux.io/flux.html#exchanges'>
                        <Link href='https://runonflux.io/flux.html#exchanges' eventKey={20} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Buy Flux
                        <br/>
                        <div className={styles.sublink}>Learn how to trade, buy, swap or stake Flux.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://gotflux.store/'>
                        <Link href='https://gotflux.store/' eventKey={21} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        Flux store
                        <br/>
                        <div className={styles.sublink}>Buy Flux gear designed just for you.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://github.com/runonflux'>
                        <Link href='https://github.com/runonflux' eventKey={23} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Github
                        <br/>
                        <div className={styles.sublink}>Explore the code that powers Flux in our Github <br/> repositories.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://github.com/RunOnFlux/press'>
                        <Link href='https://github.com/RunOnFlux/press' eventKey={24} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Press kit
                        <br/>
                        <div className={styles.sublink}>Our press kit and other related resources.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://www.runonflux.io/bug-bounty-program.html'>
                        <Link href='https://www.runonflux.io/bug-bounty-program.html' eventKey={27} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Bug bounty
                        <br/>
                        <div className={styles.sublink}>Get rewarded for finding bugs and exploits.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    </div>
                    </NavDropdown>

                    <NavDropdown title={
                      <span>Community<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown1" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                  >
                    <div className={styles.dropMenu}>
                    <NavDropdown.Item href='https://www.runonflux.io/blog.html'>
                      <Link href='https://www.runonflux.io/blog.html' eventKey={22} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Blog
                        <br/>
                        <div className={styles.sublink}>Discover all the latest news on the official Flux blog <br/> on Medium.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                   
                    <NavDropdown.Item href='https://www.runonflux.io/flux-social.html'>
                      <Link href='https://www.runonflux.io/flux-social.html' eventKey={25} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Social
                        <br/>
                        <div className={styles.sublink}>Flux social media accounts.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item href='https://www.runonflux.io/careers.html'>
                      <Link href='https://www.runonflux.io/careers.html' eventKey={26} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Careers
                        <br/>
                        <div className={styles.sublink}>See current open positions and come to work <br/> with Flux.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item href='https://support.runonflux.io/'>
                        <Link href='https://support.runonflux.io/' eventKey={29} className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Support
                        <br/>
                        <div className={styles.sublink}></div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                      </div>
                    </NavDropdown>
                    <Navbar.Brand>
                      <Link href={'https://www.youtube.com/watch?v=GJVk_LfASxk'}><Image alt="logo" src={Rabbit} style={{ width: "18.5px", height: "28.5px", marginTop: "20px" }}/></Link>
                    </Navbar.Brand>

                 {/* <Nav.Link href={'#'} eventKey={3}>Explore</Nav.Link> */}
                 {/* <Nav.Link href={'/pricing'} eventKey={30}>Pricing</Nav.Link> */}
                 {/* <Nav.Link href={'#'} eventKey={5}>Community</Nav.Link> */}
                </Nav>

               
                </Navbar.Collapse>
            </Container>
        </Navbar>
    
            </div>














            <div className="d-block d-lg-none">
            <div className={styles.navbar2}></div>
            <Navbar  expand="lg" fixed="top"  collapseOnSelect variant="dark">
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
                    <NavDropdown.Item eventKey="31" href='https://cloud.runonflux.io/hello.html'>
                      <Link href='https://cloud.runonflux.io/hello.html' className={styles.link} passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}} >
                    Flux Cloud<br/>
                    <div className={styles.sublink}>Flux Cloud presents the next generation of <br/>cloud infrastructure.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="32" href='https://www.runonflux.io/flux-dapps.html'>
                      <Link href='https://www.runonflux.io/flux-dapps.html' className={styles.link} passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        DApps
                      <br/>
                    <div className={styles.sublink}>Explore some of the applications running on<br/> Flux.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item eventKey="33" href='https://www.runonflux.io/flux-nodes.html'>
                      <Link href='https://www.runonflux.io/flux-nodes.html' className={styles.link} passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux Nodes
                     <br/>
                    <div className={styles.sublink}>Learn more about the independently run <br/>FluxNodes that power the Flux network.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="34" href='https://www.runonflux.io/flux.html' >
                      <Link href='https://www.runonflux.io/flux.html' className={styles.link} passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux
                     <br/>
                    <div className={styles.sublink}>Our Proof-of-Work cryptocurrency that<br/> powers the Flux ecosystem.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="35" href='https://www.runonflux.io/parallel.html'>
                      <Link href='https://www.runonflux.io/parallel.html' className={styles.link} passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Parallel Mining
                     <br/>
                    <div className={styles.sublink}>Flux assets can be mined on other <br/>blockchains that are interchangeable with <br/>the main chain.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="36" href='https://zelcore.io/' >
                      <Link href='https://zelcore.io/' className={styles.link} passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Zelcore
                     <br/>
                     <div className={styles.sublink}>A multi-asset, multi-platform wallet with a <br/> long list of market leading features.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="37" href='https://home.runonflux.io/dashboard/overview'>
                      <Link href='https://home.runonflux.io/dashboard/overview' className={styles.link} passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Dashboard
                     <br/>
                    <div className={styles.sublink}>Explore the latest stats on the Flux network <br/>via the Flux dashboard.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="38"  href='https://www.runonflux.io/xdao.html'>
                      <Link href='https://www.runonflux.io/xdao.html' className={styles.link} passHref={true}> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        XDAO
                     <br/>
                    <div className={styles.sublink}>Discover Flux decentralized governance <br/> organization.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                  
                   
                 </NavDropdown>  

                 <NavDropdown title={
                      <span>Discover<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                  >
                    <NavDropdown.Item eventKey="39" href='https://whitepaper.app.runonflux.io/'>
                        <Link href='https://whitepaper.app.runonflux.io/'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        Whitepaper
                        <br/>
                        <div className={styles.sublink}>Read the Flux whitepaper and discover<br/>the scope of the project.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="40" href='https://www.runonflux.io/roadmap.html'>
                        <Link href='https://www.runonflux.io/roadmap.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Roadmap
                        <br/>
                        <div className={styles.sublink}>Check out the Flux roadmap and our<br/> plans for this year and beyond.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="41" href='https://www.runonflux.io/team.html'>
                        <Link href='https://www.runonflux.io/team.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Team<br/>
                        <div className={styles.sublink}>Meet the members of the fully<br/> distributed Flux team.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="41" href='https://www.runonflux.io/partners.html'>
                        <Link href='https://www.runonflux.io/partners.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Partners<br/>
                        <div className={styles.sublink}>Collaboration is at the heart of Flux and <br/> our partners are key to that.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="43" href='https://wiki.runonflux.io/'>
                        <Link href='https://wiki.runonflux.io/'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Documentation <br/>
                        <div className={styles.sublink}>Read the Flux docs and get building on <br/> Flux today.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="44" href='https://explorer.runonflux.io/'>
                        <Link href='https://explorer.runonflux.io/'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Block Explorer
                        <div className={styles.sublink}>View blocks mined, statistics, pools, <br/> nodes and status of the network.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="45" href='https://www.runonflux.io/zero-carbon.html'>
                        <Link href='https://www.runonflux.io/zero-carbon.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Carbon Neutrality <br/>
                        <div className={styles.sublink}>Flux emphasis a Sustainable Future <br/>in Blockchain &amp; Cloud Computing.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="46" href='https://www.runonflux.io/fluxlabs.html'>
                        <Link href='https://www.runonflux.io/fluxlabs.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        FluxLabs
                        <div className={styles.sublink}>An incubation and acceleration project <br/>for blockchain and technology-based <br/> start-ups.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>

                  
                   
                 </NavDropdown>  

                 <NavDropdown title={
                      <span>Developers<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                  >

                      <NavDropdown.Item eventKey="47" href='https://jetpack2.app.runonflux.io/hello.html'>
                        <Link href='https://jetpack2.app.runonflux.io/hello.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        App
                        <br/>
                        <div className={styles.sublink}>Discover how to launch an app on the <br/>Flux network.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="48" href='https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb'>
                        <Link href='https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Node
                        <br/>
                        <div className={styles.sublink}>Become a FluxNode operator with our <br/> easy to follow guides.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="49" href='https://www.runonflux.io/mining.html'>
                        <Link href='https://www.runonflux.io/mining.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Miner
                        <br/>
                        <div className={styles.sublink}>Learn how to mine Flux with your GPU <br/>and what pools to join.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item eventKey="50"  href='https://runonflux.io/flux.html#exchanges'>
                        <Link href='https://runonflux.io/flux.html#exchanges' className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Buy Flux
                        <br/>
                        <div className={styles.sublink}>Learn how to trade, buy, swap or <br/>stake Flux.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="51" href='https://gotflux.store/' >
                        <Link href='https://gotflux.store/'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        Flux store
                        <br/>
                        <div className={styles.sublink}>Buy Flux gear designed just for you.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="53" href='https://github.com/runonflux' >
                        <Link href='https://github.com/runonflux'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Github
                        <br/>
                        <div className={styles.sublink}>Explore the code that powers Flux in our <br/> Github repositories.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="54" href='https://github.com/RunOnFlux/press' >
                        <Link href='hhttps://github.com/RunOnFlux/press'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Press kit
                        <br/>
                        <div className={styles.sublink}>Our press kit and other related resources.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="57"  href='https://www.runonflux.io/bug-bounty-program.html'>
                        <Link href='https://www.runonflux.io/bug-bounty-program.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Bug bounty
                        <br/>
                        <div className={styles.sublink}>Get rewarded for finding bugs and exploits.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    
                    </NavDropdown>
                    <NavDropdown title={
                      <span>Community<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                  >
                    
                    <NavDropdown.Item eventKey="52" href='https://www.runonflux.io/blog.html'>
                        <Link href='https://www.runonflux.io/blog.html' className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Blog
                        <br/>
                        <div className={styles.sublink}>Discover all the latest news on the official <br/>Flux blog on Medium.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item eventKey="55" href='https://www.runonflux.io/flux-social.html'>
                        <Link href='https://www.runonflux.io/flux-social.html' className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Social
                        <br/>
                        <div className={styles.sublink}>Flux social media accounts.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="56" href='https://www.runonflux.io/careers.html'>
                        <Link href='https://www.runonflux.io/careers.html'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Careers
                        <br/>
                        <div className={styles.sublink}>See current open positions and come to work <br/> with Flux.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item eventKey="59" href='https://support.runonflux.io/'>
                        <Link href='https://support.runonflux.io/'  className={styles.link} passHref={true}>
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Support
                        <br/>
                        <div className={styles.sublink}></div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    
                    </NavDropdown>
                 {/* <Nav.Link href={'/pricing'} eventKey="60">Pricing</Nav.Link> */}
              

                
                </Nav>
                <div className={styles.topNav2} style={{marginTop: "100px"}}>
                <div className="container">
                    <div className="row text-center">
                                <div className={styles.topNavLink}> <a href="https://whitepaper.app.runonflux.io/" target="_blank" rel="noreferrer">Whitepaper</a></div>
                                <div className={styles.topNavLink}> <a href="https://wiki.runonflux.io/" target="_blank" rel="noreferrer">Wiki</a></div>
                                <div className={styles.topNavLink}> <a href="https://gotflux.store/" target="_blank" rel="noreferrer">Flux Store </a></div>
                                <div className={styles.topNavLink}> <a href="https://zelcore.io/" target="_blank" rel="noreferrer">Zelcore</a></div>
                                <div className={styles.topNavLink}> <a href="https://support.runonflux.io/">Support</a></div>
                                <div className={styles.topNavLink}> <a href="mailto:info@runonflux.io?subject=Contact%20Flux!">Contact</a></div>

                                <div className={styles.mobileTopNav}>
                                 <a href="https://twitter.com/RunOnFlux" target="_blank" rel="noreferrer"><Image alt="logo" src={twitter01} /></a>
                                <a href="https://discord.io/runonflux" target="_blank" rel="noreferrer"><Image alt="logo" src={discord01}/></a>
                                <a href="https://github.com/RunOnFlux" target="_blank" rel="noreferrer"><Image alt="logo" src={github01}/></a>
                                </div>

                    </div>
                </div>
            </div>

                </Navbar.Collapse> 
            </Container>
        </Navbar>
        
            </div>
          
        </React.Fragment>
    )
}