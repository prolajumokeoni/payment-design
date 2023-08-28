import Link from "next/link";
import Image from "next/image";

export default function Editor() {
  return (
    <div className="text-xs  mt-24 mx-auto w-5/12 mb-6">
      {/* <Link href="#">Language</Link>
      <Link href="#">Python</Link>
      <Link href="#">Javascript</Link> */}
      <div className="relative text-center  ">
        <div className="">
          <Image
            src="/codesnippet.png"
            alt="codesnippet"
            width={833}
            height={594}
            priority
          />
        </div>

        <Image
          className=""
          src="/blueframe.png"
          alt="codesnippet"
          width={1113}
          height={391}
          priority
        />
      </div>
    </div>
  );
}
