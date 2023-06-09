"use client";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "../../../public/negiupp-hi.png";
import DarkModetoggle from "../DarkModeToggle/DarkModetoggle";
import { ThemeContext } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";

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
//
const NavBar = () => {
  const session = useSession();
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
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
      <div className={styles.links}>
        <DarkModetoggle />
        {links.map((link) => (
          <Link key={link.slug} href={`${link.url}`}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
