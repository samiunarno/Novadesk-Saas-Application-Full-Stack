import { ArrowRight } from "lucide-react";
import img from "../assets/logo.svg";
import { UserButton, useUser, SignInButton } from "@clerk/clerk-react";

export default function Navbar() {
  const { user } = useUser();

  return (
    <div>
      <div className="max-w-[1920px] fixed top-0 z-10 backdrop-blur-2xl flex justify-between w-full items-center py-3 px-3 md:px-20 lg:px-32">
        <button className="logo cursor-pointer">
          <img src={img} alt="logo" />
        </button>

        {user ? (
          <UserButton />
        ) : (
          <SignInButton mode="modal">
            <button className="bg-[#0046FF] rounded-full flex items-center gap-2 text-md px-10 py-2.5 cursor-pointer text-white">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </SignInButton>
        )}

       
      </div>
    </div>
  );
}
