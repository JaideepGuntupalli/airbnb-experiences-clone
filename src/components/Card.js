import ellipse from "../assets/card/Ellipse.png";
import star from "../assets/card/Star.png";

export default function Card(props) {
    const image = props.img;
    const status = props.status;
    const rating = props.rating;
    const numberOfRatings = props.number;
    const country = props.country;
    const title = props.title;
    const rate = props.rate;

    return (
        <div className="flex flex-col text-[#222222] w-1/3 md:w-1/4 xl:w-1/5">
            {/* Image */}
            <div class="relative py-2">
                <p class="absolute p-1 top-4 left-2 rounded-sm bg-white text-xs text-center">
                    {status}
                </p>
                <img src={image} alt="Avatar" />
            </div>
            {/* Details */}
            <div className="flex flex-col font-light">
                <div className="flex items-center gap-1 text-sm">
                    <img src={star} alt="star" className="" />
                    <p>{rating}</p>
                    <p className="">({numberOfRatings})</p>
                    <img src={ellipse} alt="dot" />
                    <p>{country}</p>
                </div>
                <p className="text-sm py-1">{title}</p>
                <p>
                    <span className="font-bold">From ${rate}</span> / person
                </p>
            </div>
        </div>
    );
}
