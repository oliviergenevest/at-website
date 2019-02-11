import React, { Component } from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'
import HamburgerMenu from 'react-hamburger-menu'
import { slide as Menu } from 'react-burger-menu'
import { Fade/*, Flip*/ } from 'react-reveal'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import config from '../../config/SiteConfig'
import styles from './Navigation.module.scss'
import './Headroom.scss'
/*import { rhythm } from '../../utils/typography'*/

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    //console.log(rhythm)
    this.state = {
      menuOpen: false,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
   }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

 toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }



  handleClick() {
  this.setState({
    menuOpen: !this.state.menuOpen
  });
}


  render() {
    
    return (
    
    <>

      <div className={styles.mobileNavContent}> 
           
              <Menu right isOpen={this.state.menuOpen} onStateChange={this.handleStateChange} width="350px" 
            burgerButtonClassName={ styles.bmBurgerButton }
            burgerBarClassName={ styles.bmBurgerBars }
            crossButtonClassName={ styles.bmCrossButton } 
            crossClassName={ styles.bmCross } 
            menuClassName={ styles.bmMenu } 
            morphShapeClassName={ styles.bmMorphShape } 
            itemListClassName={ styles.bmItemList } 
            itemClassName={ styles.bmItem} 
            overlayClassName={ styles.bmOverlay } 
            customCrossIcon={ false }
            customBurgerIcon={ false }
            >

              <Link to="/" onClick={() => this.closeMenu()}>
                Homepage
              </Link>
             
              <Link to="/tilt" activeClassName="active" onClick={() => this.closeMenu()}>
                Research
              </Link>
            
             
              
              <Link to="/" activeClassName="active" onClick={() => this.closeMenu()}>
                Projects
              </Link>
           
             
              <Link to="/about" activeClassName="active" onClick={() => this.closeMenu()}>
                About Alan
              </Link>
           
             <div className={styles.mobileNavSocialMedia}>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="{config.facebookPageUrl}" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </Menu>
       </div>

      <header>
        <Headroom calcHeightOnResize disableInlineStyles  >
          

            <div className={styles.name}>
              <span>
                <Link to="/" >
             
                  
                  Alan Tod
                </Link>
              </span>
           
            </div>
            
            <nav className={styles.navigation}>
              <span>
              
                <Link to="/credits"  activeClassName="active">Research</Link>
                <Link to="/"  activeClassName="active">Projects</Link>
                <Link to="/about"  activeClassName="active">About Alan</Link>
              </span>
            </nav>
             <div className={ styles.bmBurgerButton }>
             <HamburgerMenu 
                isOpen={this.state.menuOpen}
                menuClicked={this.handleClick.bind(this)}
                width={46}
                height={18}
                strokeWidth={2}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
                
            />
            </div> 
             
         
      </Headroom>

          
           
         
       


    
        
      </header>
         
      </>
      
    );
  }
}

