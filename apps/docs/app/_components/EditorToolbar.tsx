"use client";

import { useContext, useState } from "react";
import { LiveContext } from "react-live";
import { PiArrowCounterClockwiseBold, PiCheckBold, PiCopyBold } from "react-icons/pi";
import styles from "./CodeExample.module.css";

export function EditorToolbar({ originalCode }: { originalCode: string }) {
  const live = useContext(LiveContext);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(live.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  function handleReset() {
    live.onChange(originalCode);
  }

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbarActions}>
        <button
          type="button"
          className={styles.toolbarButton}
          onClick={handleReset}
          aria-label="Reset code"
          title="Reset"
        >
          <PiArrowCounterClockwiseBold />
        </button>
        <button
          type="button"
          className={styles.toolbarButton}
          onClick={handleCopy}
          aria-label="Copy code"
          title="Copy"
        >
          {copied ? <PiCheckBold /> : <PiCopyBold />}
        </button>
      </div>
    </div>
  );
}
