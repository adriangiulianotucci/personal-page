import Image from "next/image";
import profilePic from "./images/profile.jpg";

export default function Avatar() {
  return (
    <div className="bg-white flex shadow rounded-xl overflow-hidden justify-center items-center p-5 flex-col">
      <Image
        className="h-24 w-24 rounded-full"
        src={profilePic}
        width={500}
        height={500}
        alt="Picture of me"
      />

      <p className="text-xl mt-2">Adrian Tucci</p>
      <p className="text-sm text-gray-500">Full Stack Developer</p>
    </div>
  );
}
