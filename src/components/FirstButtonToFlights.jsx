import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useContext } from "react";
import { TravelContext } from '../contexts/TravelContext.jsx';
import axios from "axios";

export default function FirstButtonToFlights() {
    const { selectedDestinationCity, selectedDepartureCity } = useContext(TravelContext);

    //useEffect(() => {

    //}, []);

    const navigate = useNavigate();

    function handleClick() {
        if (selectedDestinationCity && selectedDepartureCity) {
            console.log("selectedDestinationCity", selectedDestinationCity);
            console.log("selectedDepartureCity", selectedDepartureCity);
            const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, {
                selectedDestinationCity, selectedDepartureCity
            });
            promise.then((res) => {
                console.log(res);
                navigate("/flights");
            });
            promise.catch((res) => {
                console.log(res.response.data);
                alert("Erro");
            });
        }
        else {
            alert("Selecione as cidades!")
        }
    }

    return (
        <StyledButton onClick={handleClick}>Conferir as opçõs de vôos e hoteis</StyledButton>
    );
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
