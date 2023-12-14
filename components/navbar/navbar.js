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

export function NavBar() {

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
                  <li> <Link href="/whitepaper" target="_blank" rel="noreferrer">Whitepaper <Image alt="img" src={target}/></Link></li>
                  <li> <Link href="/documentation" target="_blank" rel="noreferrer">Wiki<Image alt="img" src={target}/></Link></li>
                  <li> <Link href="/fluxStore" target="_blank" rel="noreferrer">FluxStore <Image alt="img" src={target}/></Link></li>
                  <li> <Link href="/zelcore" target="_blank" rel="noreferrer">Zelcore <Image alt="img" src={target}/></Link></li>
                  <li className={styles.navLogo}> <Link href="/twitter" target="_blank" rel="noreferrer"><Image alt="logo" src={twitter} /></Link></li>
                  <li className={styles.navLogo}> <Link href="/discord" target="_blank" rel="noreferrer"><Image alt="logo" src={discord}/></Link></li>
                  <li className={styles.navLogo}> <Link href="/github" target="_blank" rel="noreferrer"><Image alt="logo" src={github}/></Link></li>
                  <li className={styles.navBtn}> <Link href="support" target="_blank" rel="noreferrer" >Support</Link></li>
                  <li className={styles.navBtn}> <Link href="/contact" target="_blank" rel="noreferrer" >Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>  
        <Navbar className={navBar ? 'navNav active' : 'navNav'} expand="lg" collapseOnSelect  >
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
                    <NavDropdown.Item href="/fluxCloud" target="_blank" rel="noreferrer" eventKey="1">
                      <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}} >
                        Flux Cloud<br/>
                        <div className={styles.sublink}>Flux Cloud presents the next generation of cloud <br/>infrastructure.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="2">
                      <Link href={'/fluxDapps'} className={styles.link} > 
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          DApps<br/>
                          <div className={styles.sublink}>Explore some of the applications running on Flux.</div>
                        </div>
                      </Link> 
                    </NavDropdown.Item>
                  
                    <NavDropdown.Item eventKey="3">
                      <Link href={'/nodes'} className={styles.link} > 
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          FluxNodes<br/>
                          <div className={styles.sublink}>Learn more about the independently run FluxNodes that<br/> power the Flux network.</div>
                        </div>
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="4">
                      <Link href={'/flux'} className={styles.link} > 
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Flux<br/>
                          <div className={styles.sublink}>Our Proof-of-Work cryptocurrency that powers the <br/>Flux ecosystem.</div>
                        </div>
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="5">
                      <Link href={'/parallelMining'} className={styles.link} > 
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Parallel Mining<br/>
                          <div className={styles.sublink}>Flux assets can be mined on other blockchains <br/> that are interchangeable with the main chain.</div>
                        </div>
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/zelcore" target="_blank" rel="noreferrer" eventKey="6">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Zelcore<br/>
                        <div className={styles.sublink}>A multi-asset, multi-platform wallet with a  long list <br/> of market leading features.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/dashboard" target="_blank" rel="noreferrer" eventKey="7">                       
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Dashboard<br/>
                        <div className={styles.sublink}>Explore the latest stats on the Flux network via the <br/> Flux dashboard.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="8">
                      <Link href={'/XDAO'} className={styles.link} > 
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                          XDAO<br/>
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
                    <NavDropdown.Item href="/whitepaper" target="_blank" rel="noreferrer" eventKey="9">
                      <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        Whitepaper<br/>
                        <div className={styles.sublink}>Read the Flux whitepaper and discover the scope of the <br/> project.</div>
                      </div>                    
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="10">
                      <Link href={'/roadmap'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Roadmap<br/>
                          <div className={styles.sublink}>Check out the Flux roadmap and our plans for this year <br/> and beyond.</div>
                        </div>
                      </Link>                    
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="11">
                      <Link href={'/team'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Team<br/>
                          <div className={styles.sublink}>Meet the members of the fully distributed Flux team.</div>
                        </div>
                      </Link>                    
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="12">
                      <Link href={'/partners'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Partners<br/>
                          <div className={styles.sublink}>Collaboration is at the heart of Flux and  our partners <br/> are key to that.</div>
                        </div>
                      </Link>                    
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/documentation" target="_blank" rel="noreferrer" eventKey="13" >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Documentation
                        <div className={styles.sublink}>Read the Flux docs and get building on Flux today.</div>
                      </div>                  
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/blockExplorer" target="_blank" rel="noreferrer" eventKey="14">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Block Explorer<br/>
                        <div className={styles.sublink}>View blocks mined, statistics, pools, nodes and status of  <br/> the network.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="15">
                      <Link href={'/fluxCarbon'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Carbon Neutrality<br/>
                          <div className={styles.sublink}>Flux emphasis a Sustainable Future in Blockchain  &amp; <br/> Cloud Computing.</div>
                        </div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="16">
                      <Link href={'/fluxLabs'} className={styles.link} >
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
                  
                    <NavDropdown.Item href="/app" target="_blank" rel="noreferrer" eventKey="17">
                      <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        App<br/>
                        <div className={styles.sublink}>Discover how to launch an app on the Flux network.</div>
                      </div>
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href="/node" target="_blank" rel="noreferrer" eventKey="18">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Node<br/>
                        <div className={styles.sublink}>Become a FluxNode operator with our easy to <br/> follow guides.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/guides" target="_blank" rel="noreferrer" eventKey="19">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Guides / Help<br/>
                        <div className={styles.sublink}>Become an expert with our easy to follow guides.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/fractusnode" target="_blank" rel="noreferrer" eventKey="20">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Fractus
                        <br/>
                        <div className={styles.sublink}>New FluxNode tier to support the Flux network.</div>
                      </div>                      
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="21">
                      <Link href={'/mining'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Miner<br/>
                          <div className={styles.sublink}>Learn how to mine Flux with your GPU and what pools <br/> to join.</div>
                        </div>
                      </Link>
                      
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="22">
                      <Link href={'/flux#exchanges'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Buy Flux<br/>
                          <div className={styles.sublink}>Learn how to trade, buy, swap or stake Flux.</div>
                        </div>
                      </Link>                      
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/fluxStore" target="_blank" rel="noreferrer" eventKey="23">
                      <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        Flux store<br/>
                        <div className={styles.sublink}>Buy Flux gear designed just for you.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/github" target="_blank" rel="noreferrer" eventKey="24">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Github<br/>
                        <div className={styles.sublink}>Explore the code that powers Flux in our Github <br/> repositories.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="/pressKit" target="_blank" rel="noreferrer" eventKey="25">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Press kit<br/>
                        <div className={styles.sublink}>Our press kit and other related resources.</div>
                      </div>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="28">
                      <Link href={'/bugBountyProgram'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Bug bounty<br/>
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

                    <NavDropdown.Item eventKey="29">
                      <Link href={'/blog'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Blog<br/>
                          <div className={styles.sublink}>Discover all the latest news on the official Flux blog <br/> on Medium.</div>
                        </div>
                      </Link>
                    </NavDropdown.Item>                
                  
                    <NavDropdown.Item eventKey="30">
                      <Link href={'/social'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Social<br/>
                          <div className={styles.sublink}>Flux social media accounts.</div>
                        </div>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="31">
                      <Link href={'/careers'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                          Careers
                          <br/>
                          <div className={styles.sublink}>See current open positions and come to work <br/> with Flux.</div>
                        </div>
                      </Link>
                    </NavDropdown.Item>
                  
                    <NavDropdown.Item href="/support" target="_blank" rel="noreferrer" eventKey="32">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Support<br/>
                        <div className={styles.sublink}>Contact our support team.</div>
                      </div>
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>

                <Navbar.Brand>
                  <Link href={'https://www.youtube.com/watch?v=GJVk_LfASxk'}><Image alt="logo" src={Rabbit} style={{ width: "18.5px", height: "28.5px", marginTop: "20px" }}/></Link>
                </Navbar.Brand>

              </Nav>              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="d-block d-lg-none">
        <div className={styles.navbar2}></div>
        <Navbar expand="lg" fixed="top" collapseOnSelect variant="dark">
          <Container>

            <Navbar.Brand>
              <Link href={'/'} className={styles.link4}><Image alt="logo" src={Logo}  height="40px" width="170px"/></Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />        

            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="mx-auto">
            
                <NavDropdown title={
                  <span>Ecosystem<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                }
                  id="basic-nav-dropdown" 
                >
                  <NavDropdown.Item href="/fluxCloud" target="_blank" rel="noreferrer" eventKey="33" >
                    <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}} >
                      Flux Cloud<br/>
                      <div className={styles.sublink}>Flux Cloud presents the next generation of <br/>cloud infrastructure.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="34">
                    <Link href={'/fluxDapps'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        DApps<br/>
                        <div className={styles.sublink}>Explore some of the applications running on<br/> Flux.</div>
                      </div>
                    </Link> 
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item eventKey="35">
                    <Link href={'/nodes'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        FluxNodes<br/>
                        <div className={styles.sublink}>Learn more about the independently run <br/>FluxNodes that power the Flux network.</div>
                      </div>
                    </Link> 
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="36">
                    <Link href={'/flux'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux<br/>
                        <div className={styles.sublink}>Our Proof-of-Work cryptocurrency that<br/> powers the Flux ecosystem.</div>
                      </div>
                    </Link> 
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="37">
                    <Link href={'/parallelMining'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Parallel Mining<br/>
                        <div className={styles.sublink}>Flux assets can be mined on other <br/>blockchains that are interchangeable with <br/>the main chain.</div>
                      </div>
                    </Link> 
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/zelcore" target="_blank" rel="noreferrer" eventKey="38"> 
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Zelcore<br/>
                      <div className={styles.sublink}>A multi-asset, multi-platform wallet with a <br/> long list of market leading features.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/dashboard" target="_blank" rel="noreferrer" eventKey="39">
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Dashboard<br/>
                      <div className={styles.sublink}>Explore the latest stats on the Flux network <br/>via the Flux dashboard.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="40">
                    <Link href={'/XDAO'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        XDAO<br/>
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
                  <NavDropdown.Item href="/whitepaper" target="_blank" rel="noreferrer" eventKey="41">
                    <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                      Whitepaper<br/>
                      <div className={styles.sublink}>Read the Flux whitepaper and discover<br/>the scope of the project.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="42">
                    <Link href={'/roadmap'}  className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Roadmap<br/>
                        <div className={styles.sublink}>Check out the Flux roadmap and our<br/> plans for this year and beyond.</div>
                      </div>
                    </Link>                      
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="43">
                    <Link href={'/team'}  className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Team<br/>
                        <div className={styles.sublink}>Meet the members of the fully<br/> distributed Flux team.</div>
                      </div>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="44">
                    <Link href={'/partners'}  className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Partners<br/>
                        <div className={styles.sublink}>Collaboration is at the heart of Flux and <br/> our partners are key to that.</div>
                      </div>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/documentation" target="_blank" rel="noreferrer" eventKey="45">
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Documentation<br/>
                      <div className={styles.sublink}>Read the Flux docs and get building on <br/> Flux today.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="blockExplorer" target="_blank" rel="noreferrer" eventKey="46">
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Block Explorer<br/>
                      <div className={styles.sublink}>View blocks mined, statistics, pools, <br/> nodes and status of the network.</div>
                    </div>  
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="47">
                    <Link href={'/fluxCarbon'}  className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Carbon Neutrality<br/>
                        <div className={styles.sublink}>Flux emphasis a Sustainable Future <br/>in Blockchain &amp; Cloud Computing.</div>
                      </div>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="48">
                    <Link href={'/fluxLabs'}  className={styles.link} >
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

                  <NavDropdown.Item href="/app" target="_blank" rel="noreferrer" eventKey="49">
                    <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                      App<br/>
                      <div className={styles.sublink}>Discover how to launch an app on the <br/>Flux network.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/node" target="_blank" rel="noreferrer" eventKey="50">
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Node<br/>
                      <div className={styles.sublink}>Become a FluxNode operator with our <br/> easy to follow guides.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/guides" target="_blank" rel="noreferrer" eventKey="51">
                    <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                      Guides / Help<br/>
                      <div className={styles.sublink}>Become an expert with our easy to follow guides.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="fractusnode" target="_blank" rel="noreferrer" eventKey="52">
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Fractus<br/>
                      <div className={styles.sublink}>New FluxNode tier to support the <br/>Flux network.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="53">
                    <Link href={'/mining'} className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Miner<br/>
                        <div className={styles.sublink}>Learn how to mine Flux with your GPU <br/>and what pools to join.</div>
                      </div>
                    </Link>
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item eventKey="54" >
                    <Link href={'/flux#exchanges'} className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Buy Flux<br/>
                        <div className={styles.sublink}>Learn how to trade, buy, swap or <br/>stake Flux.</div>
                      </div>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/fluxStore" target="_blank" rel="noreferrer" eventKey="55">
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Flux store<br/>
                      <div className={styles.sublink}>Buy Flux gear designed just for you.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/github" target="_blank" rel="noreferrer" eventKey="56">
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Github<br/>
                      <div className={styles.sublink}>Explore the code that powers Flux in our <br/> Github repositories.</div>
                    </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/pressKit" target="_blank" rel="noreferrer" eventKey="57">
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Press kit<br/>
                        <div className={styles.sublink}>Our press kit and other related resources.</div>
                      </div>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="58">
                    <Link href={'/bugBountyProgram'}  className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Bug bounty<br/>
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
                
                  <NavDropdown.Item eventKey="59" >
                    <Link href={'/blog'} className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Blog<br/>
                        <div className={styles.sublink}>Discover all the latest news on the official <br/>Flux blog on Medium.</div>
                      </div>
                    </Link>
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item eventKey="60">
                    <Link href={'/social'}  className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Social<br/>
                        <div className={styles.sublink}>Flux social media accounts.</div>
                      </div>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item eventKey="61">
                    <Link href={'/careers'}  className={styles.link} >
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Careers<br/>
                        <div className={styles.sublink}>See current open positions and come to work <br/> with Flux.</div>
                      </div>
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/support" target="_blank" rel="noreferrer" eventKey="62">
                    <div style={{textDecoration: "none", color: "inherit"}}>
                      Support<br/>
                      <div className={styles.sublink}>Contact our support team.</div>
                    </div>
                  </NavDropdown.Item>
                            
                </NavDropdown>
              
              </Nav>

              <div className={styles.topNav2} style={{marginTop: "100px"}}>
                <div className="container">
                  <div className="row text-center">
                    <div className={styles.topNavLink}> <Link href="/whitepaper" target="_blank" rel="noreferrer">Whitepaper</Link></div>
                    <div className={styles.topNavLink}> <Link href="/documentation" target="_blank" rel="noreferrer">Wiki</Link></div>
                    <div className={styles.topNavLink}> <Link href="/fluxStore" target="_blank" rel="noreferrer">Flux Store </Link></div>
                    <div className={styles.topNavLink}> <Link href="/zelcore" target="_blank" rel="noreferrer">Zelcore</Link></div>
                    <div className={styles.topNavLink}> <Link href="/support" target="_blank" rel="noreferrer">Support</Link></div>
                    <div className={styles.topNavLink}> <Link href="/contact ">Contact</Link></div>

                    <div className={styles.mobileTopNav}>
                      <Link href="/twitter" target="_blank" rel="noreferrer"><Image alt="logo" src={twitter01} /></Link>
                      <Link href="/discord" target="_blank" rel="noreferrer"><Image alt="logo" src={discord01}/></Link>
                      <Link href="/github" target="_blank" rel="noreferrer"><Image alt="logo" src={github01}/></Link>
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
