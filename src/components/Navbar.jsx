import React from 'react'
import { NavLink } from 'react-router';

export default function Navbar() {
    const styles ={
        ling: 'hover:font-medium hover:text-[#8260456] active:font-[200]'
    }
  return (
    <nav className=' mb-10'>
        <ul className='flex justify-center gap-2 font-bold'>
            <li className={styles.ling}>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className={styles.ling}>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li className={styles.ling}> 
                <NavLink to='/products'>Products</NavLink>
            </li>
        </ul>
    </nav>
  );
}
