import { createContext, useState } from "react";

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
    const [selectedDepartureCity, setSelectedDepartureCity] = useState('');
    const [selectedDestinationCity, setSelectedDestinationCity] = useState('');

    return (
        <TravelContext.Provider
            value={{
                selectedDestinationCity,
                setSelectedDestinationCity,
                selectedDepartureCity,
                setSelectedDepartureCity
            }}
        >
            {children}
        </TravelContext.Provider>
    );
};