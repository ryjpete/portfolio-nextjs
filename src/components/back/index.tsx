"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface BackProps {
  onClick: () => void;
}

export default function Back({ onClick }: BackProps) {
  return (
    <button aria-label="Go back" onClick={onClick}>
      <ArrowLeftIcon strokeWidth={1} height={48} width={48} color="var(--clr-gray-white)" />
    </button>
  );
}
