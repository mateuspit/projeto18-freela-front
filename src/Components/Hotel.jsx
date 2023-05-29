import React from 'react';
import styled from 'styled-components';

//export default function Flight ({ imageSrc, price, HotelName, arrivalTime }) {
export default function Hotel() {
    return (
        <Container>
            <HotelImage src="https://blog.maxmilhas.com.br/wp-content/uploads/2016/01/pr%C3%A9dio-de-hotel.jpg" alt="Hotel" />
            <HotelName>Hotel legal</HotelName>
            <Price>R$ 42,02</Price>
            {/*<HotelImage src={imageSrc} alt="City" />
            <Price>{price}</Price>
            <HotelName>Partida: {HotelName}</HotelName>
            <ArrivalTime>Chegada: {arrivalTime}</ArrivalTime>*/}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid white;
  border-radius: 8px;
  padding: 16px;
`;

const HotelImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

const HotelName = styled.p`
  margin-bottom: 4px;
`;

const ArrivalTime = styled.p`
  margin-bottom: 8px;
`;
