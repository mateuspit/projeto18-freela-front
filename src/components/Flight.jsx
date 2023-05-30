import React from 'react';
import styled from 'styled-components';

//export default function Flight ({ imageSrc, price, departureTime, arrivalTime }) {
export default function Flight() {
    return (
        <Container>
            <CityImage src="https://www.tudodeviagem.com/wp-content/uploads/2015/11/aviao-decolando.jpg" alt="City" />
            <Price>R$ 69,69</Price>
            <DepartureTime>Partida: 04:20</DepartureTime>
            <ArrivalTime>Chegada: 16:20</ArrivalTime>
            {/*<CityImage src={imageSrc} alt="City" />
            <Price>{price}</Price>
            <DepartureTime>Partida: {departureTime}</DepartureTime>
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

const CityImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

const DepartureTime = styled.p`
  margin-bottom: 4px;
`;

const ArrivalTime = styled.p`
  margin-bottom: 8px;
`;
