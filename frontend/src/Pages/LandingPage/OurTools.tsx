import { useUser } from "@clerk/clerk-react"
import { useNavigate } from "react-router-dom";
import { AiToolsData } from "../../assets/assets";

const Ourtools = () => {
    const user = useUser();
    const navigate = useNavigate();
  return (
    <div className="pb-24">
        <div className="mt-6 text-4xl  md:text-5xl text-[#3B3B3B] text-center px-3 md:px-20 xl:px-32 font-semibold">
             Powerful AI Tools
        </div>
        <div className="mb-8 mt-6 text-base md:text-lg text-[#858585] text-center px-3  md:px-20 xl:px-32 font-normal mx-auto">
             Everything you need to create, enhance, and optimize your content with cutting <br /> edge AI technology.
        </div>
        <div className='flex flex-wrap md:grid-cols-3 mt-10 justify-center  px-3 md:px-20 xl:px-32 '>
  {AiToolsData.map((tool, index)=>(
    <div key={index} className='p-8 m-4 max-w-[400px] rounded-lg bg-[#FDFDFE] 
      shadow-lg border border-gray-100 hover:-translate-y-1 transition-all 
      duration-300 cursor-pointer' onClick={()=> user && navigate(tool.path)}>
      
      <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style=
        {{background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`}}/>
      
      <h3 className='mt-6 mb-3 text-lg font-semibold'>{tool.title}</h3>
      <p>{tool.description}</p>
    </div>
  ))}
</div>
    </div>
  )
}

export default Ourtools
