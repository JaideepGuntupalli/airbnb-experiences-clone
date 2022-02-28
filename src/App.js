import Header from "./components/Header";
import Hero from "./components/Hero";
import OnlineExp from "./components/OnlineExp";

function App() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center">
                <Hero />
                <OnlineExp />
            </main>
        </>
    );
}

export default App;
