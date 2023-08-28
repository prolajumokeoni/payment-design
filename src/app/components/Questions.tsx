import Image from "next/image";
import Link from "next/link";

export default function Questions() {
  return (
    <div className="text-left w-10/12 mb-12 mx-auto w-11/12">
      <h2>FAQS</h2>
      <p className="w-5/12 text-left text-xs mb-2">
        Are you looking for a reliable payment processor to help you expand your
        online business? Look no further, Zenithpay is here to help you access a
        larger market with ease!
      </p>
      <div className="border flex justify-between items-center p-2">
        <p>When do we launch?</p>
        <Image
          className=""
          src="/icon.png"
          alt="codesnippet"
          width={10}
          height={10}
          priority
        />
      </div>
      <div className="border flex justify-between items-center p-2 mt-3">
        <p>Do you get a discount when you join the waitlist?</p>
        <Image
          className=""
          src="/icon.png"
          alt="codesnippet"
          width={10}
          height={10}
          priority
        />
      </div>
      <div className="border flex justify-between items-center p-2 mt-3">
        <p>When do we launch?</p>
        <Image
          className=""
          src="/icon.png"
          alt="codesnippet"
          width={10}
          height={10}
          priority
        />
      </div>
			<h3 className="mt-6 text-xs">Still have a question?</h3>
			<p m-4 text-xs>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			<Link className="border p-3 mt-3 text-xs" href="#">
          Contact us
        </Link>
	  </div>
  );
}
