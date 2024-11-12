import React from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';

import classes from './Header.module.css';
import Image from 'next/image';
import HeaderBackground from './HeaderBackground';

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
                    <li> <Link href={'/meals'}>Browse Meals</Link>  </li>
                    <li><Link href={'/community'}>Foodie Community</Link></li>
                </ul>

            </nav>
        </header>
    </>
  )
}

export default Header
