import React from 'react';
import styled from 'styled-components';

export default function SideMenuFlights({ handleFilter }) {
    const [minPrice, setMinPrice] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');
    const [departureDate, setDepartureDate] = React.useState('');
    const [arrivalDate, setArrivalDate] = React.useState('');

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleDepartureDateChange = (event) => {
        setDepartureDate(event.target.value);
    };

    const handleArrivalDateChange = (event) => {
        setArrivalDate(event.target.value);
    };

    const handleFilterClick = () => {
        const filters = {
            minPrice,
            maxPrice,
            departureDate,
            arrivalDate
        };

        handleFilter(filters);
    };

    return (
        <SidebarContainer>
            <Title>Filtros</Title>
            <FilterLabel>
                Preço mínimo:
                <FilterInput
                    type="number"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                />
            </FilterLabel>
            <FilterLabel>
                Preço máximo:
                <FilterInput
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                />
            </FilterLabel>
            <FilterLabel>
                Data de partida:
                <FilterInput
                    type="date"
                    value={departureDate}
                    onChange={handleDepartureDateChange}
                />
            </FilterLabel>
            <FilterLabel>
                Data de chegada:
                <FilterInput
                    type="date"
                    value={arrivalDate}
                    onChange={handleArrivalDateChange}
                />
            </FilterLabel>
            <StyledButton onClick={handleFilterClick}>Filtrar</StyledButton>
        </SidebarContainer>
    );
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;
`;

const SidebarContainer = styled.div`
  width: 300px;
  height: calc(100vh - 50px);
  background-color: #3CB300;
  padding: 20px;
  border-right: 2px solid white;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 900;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 900;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;