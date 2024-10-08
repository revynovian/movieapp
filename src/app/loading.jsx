import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center min-h-screen mb-40">
      <Image src="/spinner.svg" width={40} height={40} alt="loading"></Image>
    </div>
  )
}