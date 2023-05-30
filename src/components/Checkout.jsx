import React from 'react';
import styled from 'styled-components';

export default function Checkout() {
    // Exemplo de informações escolhidas pelo cliente
    const from = "São Paulo";
    const to = "Rio de Janeiro";
    const departureAirport = "Aeroporto de Congonhas";
    const departureTime = "10:00";
    const departurePrice = "R$ 200,00";
    const returnAirport = "Aeroporto Santos Dumont";
    const returnTime = "14:00";
    const returnPrice = "R$ 180,00";
    const totalFlightPrice = "R$ 380,00";
    const hotelName = "Hotel ABC";
    const checkinDate = "2023-06-01";
    const checkoutDate = "2023-06-05";
    const hotelPricePerNight = "R$ 150,00";
    const totalTripPrice = "R$ 980,00";

    return (
        <CheckoutDiv>
            <CheckoutHeading>Resumo da Compra</CheckoutHeading>
            <CheckoutInfoTitle>Informações sobre as passagens:</CheckoutInfoTitle>
            <CheckoutInfo>Indo de {from} para {to}</CheckoutInfo>
            <CheckoutInfo>Aeroporto de ida: {departureAirport}</CheckoutInfo>
            <CheckoutInfo>Horário de ida: {departureTime}</CheckoutInfo>
            <CheckoutInfo>Preço da ida: {departurePrice}</CheckoutInfo>
            <CheckoutInfo>Aeroporto de volta: {returnAirport}</CheckoutInfo>
            <CheckoutInfo>Horário de volta: {returnTime}</CheckoutInfo>
            <CheckoutInfo>Preço da volta: {returnPrice}</CheckoutInfo>
            <CheckoutInfo>Preço total com passagens: <span>{totalFlightPrice}</span></CheckoutInfo>
            <CheckoutInfoTitle>Informações sobre o hotel:</CheckoutInfoTitle>
            <CheckoutInfo>Nome do hotel: {hotelName}</CheckoutInfo>
            <CheckoutInfo>Dia de check-in: {checkinDate}</CheckoutInfo>
            <CheckoutInfo>Dia de check-out: {checkoutDate}</CheckoutInfo>
            <CheckoutInfo>Preço da diária do hotel: {hotelPricePerNight}</CheckoutInfo>
            <CheckoutInfo>Preço total com hotel: <span>R$ {150 * 5}</span></CheckoutInfo>
            <CheckoutInfoTitle>Preço total: <span>{totalTripPrice}</span></CheckoutInfoTitle>
        </CheckoutDiv>
    );
};

const CheckoutInfoTitle = styled.p`
    text-decoration: underline;
    text-align: left;
    color: white;
    font-weight: 900;
    margin-top: 30px;
    span{
        font-size: 20px;
        font-weight: 900;
    }
    margin-bottom: 5px;
`;
const CheckoutDiv = styled.div`
  background-color: #7DEA46;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid white;
`;

const CheckoutHeading = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-weight: 900;
  color: white;
  text-decoration: underline;
`;

const CheckoutInfo = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
  color: white;
  span{
    font-weight: 900;
    font-size: 20px;       
  }
`;