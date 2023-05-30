
import DropdownCitiesDestination from "../components/DropdownCitiesDestination";
import DropdownCitiesDeparture from "../components/DropdownCitiesDeparture";
import Header from "../components/Header";
import styled from "styled-components";
import FirstButtonToFlights from "../components/FirstButtonToFlights";
import { useEffect, useContext } from "react";
import { TravelContext } from '../contexts/TravelContext.jsx';


export default function HomePage() {
    //const { selectedDestinationCity, selectedDepartureCity } = useContext(TravelContext);


    //useEffect(() => {
    //    console.log(selectedDestinationCity);
    //    console.log(selectedDepartureCity);
    //}, [selectedDestinationCity, selectedDepartureCity]);
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
                    <Text>Selecione a cidade de partida e a cidade de destino e vamos mostras todas as opções de passagens e hoteis disponiveis com filtros que ajudam a personalizar sua experiência</Text>
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