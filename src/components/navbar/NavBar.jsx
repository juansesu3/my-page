import Link from "next/link";
import React from "react";

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
    <div>
      <Link href={"/"}>NeGiUpp</Link>
      <div>
        {links.map((link) => (
          <Link key={link.slug} href={`${link.url}`} >{link.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
