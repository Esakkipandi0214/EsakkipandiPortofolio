import Image from "next/image";
import Sticker from "../../public/HeroSection/Programming-amico.svg";

export default function HeroSection() {
  return (
    <div id="Home" className="w-full flex-1 min-h-screen  md:min-h-max  flex flex-col justify-center items-center px-6 sm:px-12">
      {/* Content Wrapper */}
      <div className="relative w-full max-w-5xl text-center space-y-4">
        {/* Top Button */}
        <div className="flex justify-center">
          <button className="py-1 px-4 border-2 border-black rounded-full">
            <h1 className="text-black font-medium">Hello</h1>
          </button>
        </div>

        {/* Name Section */}
        <div className="flex flex-wrap justify-center gap-3 text-center">
          <h1 className="text-black font-semibold text-4xl sm:text-5xl md:text-6xl">I&apos;m</h1>
          <h1 className="text-orange-500 font-semibold text-4xl sm:text-5xl md:text-6xl">Esakki</h1>
          <h1 className="text-orange-300 font-semibold text-4xl sm:text-5xl md:text-6xl">Pandi</h1>
          <h1 className="text-black font-semibold text-4xl sm:text-5xl md:text-6xl">,</h1>
        </div>

        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-black font-semibold text-3xl sm:text-4xl md:text-5xl">
            Full Stack Web Developer
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-10">
        <div className="bg-orange-500 rounded-full p-4 sm:p-6">
          <Image
            src={Sticker}
            className="w-[420px] sm:w-72 md:w-96 lg:w-[420px]"
            alt="Hero Illustration"
          />
        </div>
      </div>
    </div>
  );
}
