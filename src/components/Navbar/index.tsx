'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Smartphones', href: '#' },
  { label: 'Laptops', href: '#' },
  { label: 'Categories', href: '#' },
  { label: 'Hot Deals', href: '#' },
];

const Navbar =() => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar