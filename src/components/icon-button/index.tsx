"use client";

import Image from "next/image";

import styles from "./icon-button.module.css";

interface IconButtonProps {
  onClick: () => void;
  src: string;
  ariaLabel?: string;
}

export default function IconButton({ 
  onClick,
  ariaLabel = "",
  src
}: IconButtonProps) {
  if (!src) return false;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={styles.iconBtn}
    >
      <Image
        src={src}
        alt={ariaLabel}
        width={48}
        height={48}
      />
    </button>
  );
}
