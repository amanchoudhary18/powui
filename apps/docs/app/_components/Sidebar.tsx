"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const components = [{ slug: "button", label: "Button" }];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.sidebar} aria-label="Components">
      <p className={styles.heading}>Components</p>
      <ul>
        {components.map(({ slug, label }) => {
          const href = `/components/${slug}`;
          const isActive = pathname === href;
          return (
            <li key={slug}>
              <Link
                href={href}
                className={isActive ? styles.linkActive : styles.link}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
