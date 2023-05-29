
import DropdownCitiesDestination from "../Components/DropdownCitiesDestination";
import DropdownCitiesDeparture from "../Components/DropdownCitiesDeparture";
import Header from "../Components/Header";
import styled from "styled-components";
import FirstButtonToFlights from "../Components/FirstButtonToFlights";

export default function HomePage() {
    return (
        <>
            <HomePageContainer>
                <Header />
                <CitiesOptions>
                    <span>🛫</span><DropdownCitiesDeparture />
                    <SpaceBetweenOptions>🛬</SpaceBetweenOptions><DropdownCitiesDestination />
                </CitiesOptions>
                <FirstButtonToFlights />
                <TextSpot>
                    <Text>Coloque a cidade de partida e a cidade de destino e vamos mostras todas as opções de passagens e hoteis disponiveis com filtros que ajudam a personalizar sua experiencia</Text>
                    <Text>Ao final mostramos um resumo de suas escolhas.</Text>
                    <p>*Se deseja salvar suas escolhas faça cadastro!</p>
                </TextSpot>
            </HomePageContainer>
        </>
    );
}

const TextSpot = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        
    }
    margin-top: 100px;
`;

const Text = styled.p`
    font-size: 20px;
    color: black;
    font-weight: 600;
    margin-top: 15px;
    text-align: center;
`;

const SpaceBetweenOptions = styled.span`
    margin-left: 150px;
`;

const HomePageContainer = styled.div`
    button{
        margin-top: 150px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CitiesOptions = styled.div`
    
    span{
        margin-right: 10px;
        font-size: 35px;
    }
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;