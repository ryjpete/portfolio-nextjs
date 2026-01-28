import Image from "next/image";

import logo from "@/public/assets/images/logo.svg";

export default function Logo() {

  const props = {
    className: "logo",
    style: {
      filter: "brightness(80%) saturate(0%) invert(0%) sepia(0%) saturate(10000%) hue-rotate(-10deg)",
    },
    src: logo,
    alt: "Ryan Peterson logo",
    width: 100,
    height: 100,
    priority: true,
  };

  return <Image {...props} alt={props.alt} />;
}
