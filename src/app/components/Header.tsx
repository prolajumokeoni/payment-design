import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="flex  justify-between mt-5 px-5 text-xs items-center">
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/logo.png"
            alt="Vercel Logo"
            width={50}
            height={54}
            priority
          />
          <Link href="#">Products</Link>
          <Link href="#">Solutions</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Company</Link>
        </div>
        <Link className="border p-3" href="#">
          Contact us
        </Link>
      </div>
      <div></div> 
      <div className="mx-auto w-5/12 text-center">
        <h1
          className="text-5xl mt-24 
			"
        >
          Open Payments at the Speed of Light
        </h1>
				<div>
        <p className="mt-6 text-xs">
          Unlock Groundbreaking New Payment Experiences
        </p>
				</div>
      <div className="mt-4 text-xs">
        <input  className="p-3" placeholder="Enter your email"/>
        <button className="ml-6 bg-indigo-500 p-3">Join our waitlist </button>
      </div>
      </div>
    </div>
  );
}
