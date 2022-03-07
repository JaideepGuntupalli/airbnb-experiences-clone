import Card from "./Card";
import img1 from "../assets/card/img1.png";
import img2 from "../assets/card/img2.png";
import img3 from "../assets/card/img3.png";

export default function OnlineExp() {
    return (
        <div className="w-4/5 md:w-3/4">
            <h1 className="font-semibold text-3xl md:text-4xl">
                Online Experiences
            </h1>
            <p className="font-light text-sm w-3/4 md:text-base md:w-2/3 md:pt-4 pb-16">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
            <div className="flex flex-wrap gap-4">
                <Card
                    img={img1}
                    status="SOLD OUT"
                    rating="5.0"
                    number="6"
                    country="USA"
                    title="Life lessons with Katie Zaferes"
                    rate="136"
                />
                <Card
                    img={img2}
                    status="ONLINE"
                    rating="5.0"
                    number="30"
                    country="USA"
                    title="Learn wedding photography"
                    rate="125"
                />
                <Card
                    img={img3}
                    status="ONLINE"
                    rating="4.8"
                    number="2"
                    country="USA"
                    title="Group Mountain Biking"
                    rate="50"
                />
            </div>
        </div>
    );
}
