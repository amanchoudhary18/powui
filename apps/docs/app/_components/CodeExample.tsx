"use client";

import { Button, type ButtonVariant } from "@powui/react";
import { themes } from "prism-react-renderer";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { PiArrowRightBold, PiRocketLaunchBold, PiTrashBold } from "react-icons/pi";
import { comicBurst } from "./comicBurst";
import { EditorToolbar } from "./EditorToolbar";
import styles from "./CodeExample.module.css";

const accents: ButtonVariant[] = [
  "gamma",
  "vision",
  "villain",
  "cosmic",
  "mutant",
  "vibranium",
];

// Exposed to every live snippet so examples can reference them without an import line.
const scope = {
  Button,
  accents,
  PiRocketLaunchBold,
  PiArrowRightBold,
  PiTrashBold,
  comicBurst,
};

export function CodeExample({ code }: { code: string }) {
  const trimmedCode = code.trim();

  return (
    <LiveProvider code={trimmedCode} scope={scope} theme={themes.github}>
      <div className={styles.example}>
        <div className={styles.preview}>
          <LivePreview className={styles.previewInner} />
        </div>
        <EditorToolbar originalCode={trimmedCode} />
        <LiveEditor className={styles.editor} />
        <LiveError className={styles.error} />
      </div>
    </LiveProvider>
  );
}
