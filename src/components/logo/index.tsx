import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/logos/logo.svg";

export default function Logo() {

  const props = {
    className: "logo",
    src: logo,
    alt: "Ryan Peterson logo",
    priority: true,
  };

  return (
    <Link href="/">
      <Image
        {...props}
        alt={props.alt}
      />
    </Link>
  );
}
