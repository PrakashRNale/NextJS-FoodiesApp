import React from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';

import classes from './Header.module.css';
import Image from 'next/image';
import HeaderBackground from './HeaderBackground';
import NavLink from './NavLink/NavLink';

const Header = () => {
  return (
    <>
        <HeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href={'/'}>
                {/* <img src={logo.src} alt='Plate of a food' /> */}
                <Image src={logo} alt="Plate of a food" priority />
                Next Level Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li> 
                    <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                    <NavLink href="/community">Foodie Community</NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    </>
  )
}

export default Header
