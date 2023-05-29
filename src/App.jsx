import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import FlightsPage from "./Pages/FlightsPage";
import HotelsPage from "./Pages/HotelsPage";
import CheckoutPage from "./Pages/CheckoutPage";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/flights" element={<FlightsPage />} />
                    <Route path="/hotels" element={<HotelsPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    {/*<Route path="/success" element={<Success />} />*/}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
