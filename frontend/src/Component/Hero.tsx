
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full px-3 lg:px-20 xl:px-32 py-24  h-[3000px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Create amazing content with <span className="text-[#6b5bff]">AI tools</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-lg max-w-2xl">
          Transform your content creation with our suite of premium AI tools. Write articles,
          generate images, and enhance your workflow.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="bg-[#6b5bff] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:opacity-90 transition">
            Start creating now <ArrowRight className="w-5 h-5"/>
          </button>
          <button className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            Watch demo
          </button>
        </div>

        {/* Trusted by */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 text-gray-500 text-sm">
          <div className="flex -space-x-3">
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="User 1"/>
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2"/>
            <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/56.jpg" alt="User 3"/>
          </div>
          <span>Trusted by 10k+ people</span>
        </div>

        {/* Logos */}
        {/* <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Slack_logo.png" alt="Slack" className="h-6"/>
          <img src="https://cdn.worldvectorlogo.com/logos/framer.svg" alt="Framer" className="h-6"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-6"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6"/>
        </div> */}

      </div>
    </section>
  );
}

