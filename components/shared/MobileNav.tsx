import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden flex">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={"/assets/icons/menu.svg"}
            width={24}
            height={24}
            alt="open"
            className=" cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="bg-white flex flex-col gap-6">
          <Image
            src={"/assets/images/logo.svg"}
            alt="logo"
            width={128}
            height={38}
          />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
