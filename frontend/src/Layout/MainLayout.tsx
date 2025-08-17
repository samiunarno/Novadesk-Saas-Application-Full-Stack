import Navbar from "../Component/Navbar";
import Home from "../Pages/LandingPage/Home";
import Ourtools from "../Pages/LandingPage/Ourtools";



export default function MainLayout() {
  return (
    <div className="max-w-[1920px] mx-auto border border-blue-500">
        <div className="">
              <Navbar/>
        </div>
         <div className="mt-16">
            <Home/>
            <Ourtools/>
        </div>
    </div>

  )
}
