import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlightsPage from "./pages/FlightsPage";
import HotelsPage from "./pages/HotelsPage";
import CheckoutPage from "./pages/CheckoutPage";
import { TravelProvider } from "./contexts/TravelContext.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <TravelProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/flights" element={<FlightsPage />} />
                        <Route path="/hotels" element={<HotelsPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                        {/*<Route path="/success" element={<Success />} />*/}
                    </Routes>
                </TravelProvider>
            </BrowserRouter>
        </>
    )
}

export default App
