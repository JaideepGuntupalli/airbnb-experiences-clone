import img1 from "../assets/card/img1.png";
import ellipse from "../assets/card/Ellipse.png";
import star from "../assets/card/Star.png";

export default function Card() {
    return (
        <div className="flex flex-col text-[#222222] w-1/3 md:w-1/4 xl:w-1/5">
            {/* Image */}
            <div class="relative py-2 overflow-hidden">
                <img src={img1} alt="Avatar" class="object-cover" />
                <p class="absolute p-1.5 top-2 left-2 rounded-sm bg-white text-xs text-center">
                    SOLD OUT
                </p>
            </div>
            {/* Details */}
            <div className="flex flex-col font-light">
                <div className="flex items-center gap-1 text-sm">
                    <img src={star} alt="star" className="" />
                    <p>5.0</p>
                    <p className="">(6)</p>
                    <img src={ellipse} alt="dot" />
                    <p>USA</p>
                </div>
                <p className="text-sm py-1">Life lessons with Katie Zaferes</p>
                <p>
                    <span className="font-bold">From $136</span> / person
                </p>
            </div>
        </div>
    );
}
