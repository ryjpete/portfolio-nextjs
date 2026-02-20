import Image from "next/image";
import Link from "next/link";

// import logo from "@/public/assets/images/logo.svg";
// import logo from "@/public/assets/images/logo-ripple.png";
// import logo from "@/app/icon-192.png";

// import logo from "@/app/assets/logos/default/logo.svg";
import logo from "@/app/assets/logos/ripple/logo-ripple.png";

import styles from "./logo.module.css";

export default function Logo() {

  const props = {
    className: `logo ${styles.logo}`,
    src: logo,
    alt: "Ryan Peterson logo",
    // width: 100,
    // height: 100,
    priority: true,
  };

  return <Link href="/"><Image {...props} alt={props.alt} /></Link>;
}
