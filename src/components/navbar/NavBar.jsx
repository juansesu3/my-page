"use client";
import Link from "next/link";
import React from "react";
import styles from './page.module.css';

const links = [
  {
    slug: 1,
    title: "Home",
    url: "/",
  },
  {
    slug: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    slug: 3,
    title: "Blo",
    url: "/blog",
  },
  {
    slug: 4,
    title: "About",
    url: "/about",
  },
  {
    slug: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    slug: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <div  className={styles.container}>
      <Link href={"/"} className={styles.logo}>NeGiUpp</Link>
      <div  className={styles.links}>
        {links.map((link) => (
          <Link key={link.slug} href={`${link.url}`}>
            {link.title}
          </Link>
        ))}
        <button
        className={styles.logout}
          onClick={() => {
            console.log("Logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
