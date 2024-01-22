import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wrapper flex flex-between flex-col md:flex-row gap-5">
      <Link href={"/"}>
        <Image
          src={"/assets/images/logo.svg"}
          alt="logo"
          width={128}
          height={38}
        />
      </Link>
      <p>2024 Evently. All Rights reserverd.</p>
    </footer>
  );
};

export default Footer;
