import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className=" bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button
              className="sm:w-full md:w-fit rounded-full h-12 px-10"
              asChild
            >
              <Link href={"#events"}>Explor Now</Link>
            </Button>
          </div>
          <Image
            src={"/assets/images/hero.png"}
            width={1000}
            height={1000}
            alt="image"
            className=" max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className=" wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of Events{" "}
        </h2>
        <div className="w-full flex sm:flex-col md:flex-row">
          Search CategoryFilter
        </div>
      </section>
    </>
  );
}
