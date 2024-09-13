import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center h-screen items-start">
      <Image src="/spinner.svg" width={40} height={40} alt="loading"></Image>
    </div>
  )
}