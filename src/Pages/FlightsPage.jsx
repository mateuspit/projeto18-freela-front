import styled from "styled-components";
import Header from "../Components/Header";
import SideMenuFlights from "../Components/SideMenuFlights";

export default function FlightsPage() {
    return (
        <>
            <FlightsPageContainer>
                <Header />
                <SideMenuFlights />
            </FlightsPageContainer>
        </>
    );
}

const FlightsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;