import pic1 from "../assets/hero/1.png";
import pic2 from "../assets/hero/2.png";
import pic3 from "../assets/hero/3.png";
import pic4 from "../assets/hero/4.png";
import pic5 from "../assets/hero/5.png";
import pic6 from "../assets/hero/6.png";
import pic7 from "../assets/hero/7.png";
import pic8 from "../assets/hero/8.png";
import pic9 from "../assets/hero/9.png";

export default function Hero() {
    return (
        <div className="flex items-center gap-2 w-4/5 my-4 mx-auto md:my-8 md:w-1/2">
            <img src={pic1} alt="" className="w-1/4 md:w-1/5" />
            <div className="flex flex-col items-center gap-2 py-10 md:pb-24 w-1/4 md:w-1/5">
                <img src={pic2} alt="" className="w-full" />
                <img src={pic3} alt="" className="w-full" />
            </div>
            <div className="flex flex-col items-center gap-2 self-end w-1/4 md:w-1/5">
                <img src={pic4} alt="" className="w-full" />
                <img src={pic5} alt="" className="w-full" />
            </div>
            <div className="flex flex-col items-center gap-2 self-start w-1/4 md:w-1/5">
                <img src={pic6} alt="" className="w-full" />
                <img src={pic7} alt="" className="w-full" />
            </div>
            <div className=" hidden md:flex flex-col items-center gap-2 w-1/4 md:w-1/5">
                <img src={pic8} alt="" className="w-full" />
                <img src={pic9} alt="" className="w-full" />
            </div>
        </div>
    );
}
