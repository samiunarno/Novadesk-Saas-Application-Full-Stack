import Navbar from "../Component/Navbar";
import Home from "../Pages/Home";


export default function MainLayout() {
  return (
    <div className="max-w-[1920px] mx-auto border border-blue-500">
        <div className="">
              <Navbar/>
        </div>
         <div className="mt-18 px-3 md:px-20 xl:px-32 ">
            <Home/>
        </div>
    </div>

  )
}
