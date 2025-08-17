import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";
import imageGroup from "../assets/user_group.png";

export default function Hero() {
   const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  ];
  return (
    <section className="w-full px-3 lg:px-20 xl:px-32 py-24 flex items-center justify-center bg-[url('/src/assets/gradientBackground.png')] bg-cover bg-no-repeat min-h-screen">
      <div className=" items-center text-center gap-6 flex flex-col mx-auto justify-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Create amazing content <br /> with{" "}
          <span className="text-[#6b5bff]">AI tools</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-lg max-w-2xl">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="bg-[#6b5bff] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:opacity-90 transition">
            Start creating now <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            Watch demo
          </button>
        </div>

        {/* Trusted by */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 text-gray-500 text-sm">
          <div className="flex -space-x-3">
            <img
              className="w-24 h-8 rounded-full "
              src={imageGroup}
              alt="User 3"
            />
          </div>
          <span>Trusted by 10k+ people</span>
        </div>

        {/* Logos */}
      <div className=" py-6">
      <Marquee speed={50} gradient={false} pauseOnHover>
        <div className="flex items-center">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt={`logo-${i}`} className="h-10 mx-6" />
          ))}
          {/* duplicate same logos to remove gap */}
          {logos.map((logo, i) => (
            <img key={`dup-${i}`} src={logo} alt={`logo-dup-${i}`} className="h-10 mx-6" />
          ))}
        </div>
      </Marquee>
    </div>
      </div>
    </section>
  );
}
