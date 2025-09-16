import React from 'react'
// import './Navbar.css'
// import styles from './Navbar.module.css'
import './Navbar.scss'
import styled from 'styled-components'
import { NavLink } from 'react-router';
const Navstyle = styled.nav`
  background-color: #333;
  padding: 10px;
`;
// const Styles={
  // navStyle: {backgroundColor: '#333333ff', padding: '10px'},
  // ulStyle: {listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '15px'}
// }
function Navbar() {

  return (
    /*
    Styling for react components:
    1. Inline Styles
    2. CSS Stylesheet
    3. CSS Modules
    4. Styled Components OR Emotion 
    5. SCSS OR SASS
    6. Tailwind CSS OR Bootstrap OR any CSS Framework
    7. UI Component Libraries (Shadcn UI, Material UI, Chakra UI, Ant Design , etc.)
    */
   <Navstyle >
    <ul >
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
   </Navstyle>
  )
}

export default Navbar