import airbnbLogo from "../assets/airbnb-logo.png";

export default function Header() {
    return (
        <header className="h-16 shadow-md md:h-20">
            <nav className="mx-auto h-full w-full flex items-center justify-start md:w-4/5 xl:w-3/4">
                <img
                    src={airbnbLogo}
                    alt="Logo of airbnb"
                    className="mx-10 md:scale-125"
                />
            </nav>
        </header>
    );
}
