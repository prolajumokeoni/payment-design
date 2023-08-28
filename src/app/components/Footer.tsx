import Image from "next/image";
export default function Footer() {
  return (
		<div className="w-10/12 mb-12 mx-auto w-11/12">
    <div className="flex justify-between w-5/12 items-center">
      <Image
        src="/logo.png"
        alt="Vercel Logo"
        width={50}
        height={54}
        priority
      />
      <ul className="">
        <li className="">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
      </ul>
      <ul>
        <li className="">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
      </ul>{" "}
      <ul>
        <li className="">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
        <li className="text-xs">Use Zenith</li>
      </ul>
    </div>
		</div>
  );
}
