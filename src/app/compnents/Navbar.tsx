import Link from "next/link"



export default function Navbar(){
return(
    <>
   {/* parent */}
   <div className="w-[1322px] h-[91px] text-[#ffffff] ml-[59px]  relative">

   {/*brand name child*/}
   <h3 className="w-[187px] h-[58px]  pl-[136px] pt-[17px] text-[24px] absolute leading-[32px] tracking-[0.1px]">BrandName</h3>
       {/*  Navbar link  child*/}
    <div className="w-[815px] h-[58px] top-[16px] left-[364px] absolute">
    <ul className="flex text-center w-[275px] h-[24px]  gap-[21px] text-[14px] absolute top-[17px] leading-[24px] tracking-[0.2px]">
    <li className="w-[43px]"><Link href="/">Home</Link></li>
    <li className="w-[59px]"><Link href="/">Product</Link></li>
    <li className="w-[52px]"><Link href="/">Pricing</Link></li>
    <li  className="w-[58px]"><Link href="/">Contact</Link></li>
    </ul>

    {/* navbar button */}
   <div className=" w-[189px]  h-[52px] top-[3px] left-[626px] gap-[45px] absolute  leading-[22px] tracking-[0.2px] text-[14px]">
    <button className="w-[41px] h-[22px]  text-right">Login</button>
    <button className="w-[110px] h-[52px] rounded-[5px] ml-[30px] bg-[#23A6F0] ">JOIN US</button>
   </div>
    </div>
    </div>
</>
    )
  }