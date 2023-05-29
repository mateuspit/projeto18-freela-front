import styled from "styled-components";
import Header from "../Components/Header";
import SideMenuFlights from "../Components/SideMenuFlights";
import Flights from "../Components/Flights";
import PageButtonFlights from "../Components/PageButtonFlights";

export default function FlightsPage() {
    return (
        <>
            <FlightsPageContainer>
                <Header />
                <ContentContainer>
                    <SideMenuFlights />
                    <FlightsContainer>
                        <Text>Escolha uma das opções abaixo:</Text>
                        <Flights />
                        <PageButtonFlights />
                    </FlightsContainer>
                </ContentContainer>
            </FlightsPageContainer>
        </>
    );
}

const FlightsContainer = styled.div`
    margin-top: 30px;
    width: calc(100vw - 300px);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
`;

const ContentContainer = styled.div`
    display: flex;
`;

const Text = styled.p`
    color: white;
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const FlightsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;