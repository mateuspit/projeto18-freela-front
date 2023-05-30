import styled from "styled-components";
import Header from "../components/Header";
import SideMenuFlights from "../components/SideMenuFlights";
import Flights from "../components/Flights";
import PageButtonFlights from "../components/PageButtonFlights";

export default function FlightsPage() {
    return (
        <>
            <FlightsPageContainer>
                <Header />
                <ContentContainer>
                    <SideMenuFlights />
                    <FlightsContainer>
                        <Text>Escolha uma das opções de passagem aérea abaixo:</Text>
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