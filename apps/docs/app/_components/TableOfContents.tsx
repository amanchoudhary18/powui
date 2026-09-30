"use client";

import { useEffect, useState } from "react";
import styles from "./TableOfContents.module.css";

export type TocEntry = { id: string; label: string };

export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string>(entries[0]?.id ?? "");

  useEffect(() => {
    const headings = entries
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav className={styles.toc} aria-label="On this page">
      <p className={styles.heading}>On this page</p>
      <ul>
        {entries.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={id === activeId ? styles.linkActive : styles.link}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
