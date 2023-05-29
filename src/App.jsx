import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FlightsPage from "./Pages/FlightsPage";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/flights" element={<FlightsPage />} />
                    {/*<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/success" element={<Success />} />*/}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
