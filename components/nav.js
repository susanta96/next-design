import React from 'react'
import Link from 'next/link'
import Styles from '../static/Styles/navigationStyle';


const Nav = () => {

  return (
    <nav style={Styles.navigation}>
      <Link href="#"><a><div style={Styles.item}>Explore</div></a></Link>
      <Link href="#"><a><div style={Styles.item}>Courses</div></a></Link>
      <Link href="#"><a><div style={Styles.item}>Articles</div></a></Link>
      <Link href="#"><a><div style={Styles.item}>Educators</div></a></Link>
      <Link href="#"><a><div style={Styles.item}>About</div></a></Link>
      <Link href="#"><a><div style={Styles.login}>Login</div></a></Link>
      
   </nav>
  
  
   )
  
  
}

   
   
export default Nav