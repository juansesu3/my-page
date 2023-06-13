"use client";
import React, { useContext, useEffect, useState } from "react";
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

  const [width, setWidth] = useState(null);

  useEffect(() => {
    // Función para manejar el evento de cambio de tamaño de la ventana
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    // Agregar el evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);
    // Obtener la medida de la ventana al cargar el componente
    setWidth(window.innerWidth);
    // Eliminar el evento de cambio de tamaño de la ventana al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let className = mobileNavActive
    ? styles.navStylenone
    : mode === "dark"
    ? styles.navStyle
    : styles.navStyleL;

  return (
    <div className={mode === "dark" ? styles.container : styles.containerL}>
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

        <div className={width < 768 ? className : styles.navStyle}>
          {links.map((link) => (
            <Link
              onClick={() => setMobileNavActive((prev) => !prev)}
              className={styles.navLink}
              key={link.slug}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </div>
        <div className={styles.sideicons}>
          {width < 768 && (
            <button
              className={mode === "dark" ? styles.navbutton : styles.navbuttonL}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
