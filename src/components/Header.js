import React from 'react'
import {BiSolidChevronDown} from 'react-icons/bi'
import {AiOutlineRight} from 'react-icons/ai'

import './Header.css'

const Header = () => {
  return (
    <nav className='nav'>
    <div className='Headerlogo'>
        <img src='https://www.odinschool.com/hubfs/OdinSchool_V3/icons/Odinschool_v3_logo.svg' alt='odinschoollogo'/>
    </div>
    <ul className='Headerlist'>
        <li>Bootcamps<span className='spanli'><BiSolidChevronDown/></span></li>
        <li>Success Stories</li>
        <li>Enterprise<span className='span'><BiSolidChevronDown/></span></li>
    </ul>
    <a href='signin'>Sign In<span className='span'><AiOutlineRight/></span></a>
    </nav>
  )
}

export default Header