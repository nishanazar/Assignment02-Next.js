import Navbar from "./compnents/Navbar";
import Card from "./compnents/Card"
import { Montserrat} from "next/font/google"
const montserrat = Montserrat({
    weight: "700",
    subsets: ['latin'],
    display: 'swap'
})
const montserrath4 = Montserrat ({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})

export default function Home (){
  return(
<div className={`${montserrat.className} w-[1440px] h-[1132px] top-[-590px] left-[-720px] bg-[#252B42]`}> 
  <Navbar/>
  {/* main */}
  <div className="h-[1028px] w-[1046px] absolute top-[104px] left-[197px] py-[80px] gap-[80px] ">

    {/* main content*/}
    <div className="w-[699px] h-[496px] py-[40px]  ml-[145px] gap-[40px] text-center ">
      <h5 className="font-[16px]  leading-[24px] tracking-[0.1px] text-[#23A6F0]">Welcome</h5>
      <h1 className="text-[58px]  leading-[80px] tracking-[0.2px] text-[#ffffff] my-[35px]">Selling on the <br />internet like a pro</h1>
      <h4 className={`${montserrath4.className}" text-[20px] text-[#ffffff] leading-[30px] tracking-[0.2px]`}>We know how large objects will act, but things on a <br />
      small scale just do not act that way.</h4>

      <div className="w-[365px] h-[52px] gap-[10px] text-[14px] py-[15px] px-[40px] rounded-[5px] flex justify-center leading-[22px] tracking-[0.2px] ml-[155px] my-[27px]">
      <button className="w-[193px] h-[52px]  bg-[#23A6F0]">Get Quote Now</button>
      <button className="w-[162px] h-[52px] border-[2px] border-solid border-[#23A6F0] ">Learn More</button>
      </div>
      </div>
      <Card/>
      </div>

</div>
    
  )
}