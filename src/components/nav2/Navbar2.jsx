"use client";
import React, { useContext, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModetoggle";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { ThemeContext } from "@/context/ThemeContext";

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
    title: "Blog",
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

const Navbar2 = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const session = useSession();
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={"/"} className={styles.logo}>
          <Image
            width={55}
            height={35}
            src={
              mode === "light"
                ? "https://juan-sesu-ecommerce.s3.amazonaws.com/1686503321445.png"
                : "https://juan-sesu-ecommerce.s3.amazonaws.com/1686503403143.png"
            }
            alt="img-logo"
          />
        </Link>
        <DarkModeToggle />
        <div
          className={mobileNavActive ? styles.navStylenone : styles.navStyle}
        >
          {links.map((link) => (
            <Link className={styles.navLink} key={link.slug} href={link.url}>
              {link.title}
            </Link>
            
          ))}
          {session.status === "authenticated" && (
            <button className={styles.navLink} onClick={signOut}>
              Logout
            </button>
          )}
        </div>
        <div className={styles.sideicons}>
          <button
            className={styles.navbutton}
            onClick={() => setMobileNavActive((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
