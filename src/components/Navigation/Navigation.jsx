import React, { Component } from 'react'
import Headroom from 'react-headroom'
import HamburgerMenu from 'react-hamburger-menu'
import { slide as Menu } from 'react-burger-menu'
/*import { Fade, Flip} from 'react-reveal'*/
import { FaInstagram, FaFacebook /*, FaTwitter*/ } from 'react-icons/fa'
import config from '../../config/SiteConfig'
import styles from './Navigation.module.scss'
import './Headroom.scss'
import LocalizedLink from '../LocalizedLink/LocalizedLink'

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    
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
           
              <Menu right isOpen={this.state.menuOpen} onStateChange={this.handleStateChange}  
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

              <LocalizedLink to="/" onClick={() => this.closeMenu()}>
                Homepage
              </LocalizedLink>
 
              <LocalizedLink to="/projects" activeClassName="active" onClick={() => this.closeMenu()}>
                Projects
              </LocalizedLink>
           
             <LocalizedLink to="/research" activeClassName="active" onClick={() => this.closeMenu()}>
                Research
              </LocalizedLink>
              
              <LocalizedLink to="/about" activeClassName="active" onClick={() => this.closeMenu()}>
                About Alan
              </LocalizedLink>
           
             <div className={styles.mobileNavSocialMedia}>
                <a href={config.instagramPageUrl} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              
                <a href={config.facebookPageUrl} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </Menu>
       </div>

      <header>
        <Headroom calcHeightOnResize disableInlineStyles  >
          

            <div className={styles.name}>
              <span>
                <LocalizedLink to="/" >
                  Alan Tod
                </LocalizedLink>
              </span> 
            </div>
            
            <nav className={styles.navigation}>
              <span>
                <LocalizedLink to="/projects"  activeClassName="active">Projects</LocalizedLink>
                <LocalizedLink to="/research"  activeClassName="active">Research</LocalizedLink>
                <LocalizedLink to="/about"  activeClassName="active">About Alan</LocalizedLink>
               
              </span>
            </nav>
             <div className={ styles.bmBurgerButton }>
             <HamburgerMenu 
                isOpen={this.state.menuOpen}
                menuClicked={this.handleClick.bind(this)}
                width={36}
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

