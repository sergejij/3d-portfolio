import { BrowserRouter } from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Tech,
    Navbar,
    Works,
    StarsCanvas,
    BallCanvas,
    EarthCanvas,
    ComputersCanvas,
} from "./components";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Hero />
                </div>
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
        </BrowserRouter>
    );
}

export default App;
