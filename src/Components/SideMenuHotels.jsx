import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SideMenuHotels({ filterHotels }) {
    const [minPrice, setMinPrice] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');

    const navigate = useNavigate();

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    function handleClick() {
        navigate("/checkout");
    }

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
                <Observations>*Preço minimo encontrado R$ 69,00</Observations>
            </FilterLabel>
            <FilterLabel>
                Preço máximo:
                <FilterInput
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                />
                <Observations>*Preço minimo encontrado R$ 6.969,00</Observations>
            </FilterLabel>

            <ButtonContainer>
                <StyledButton onClick={handleFilterClick}>Filtrar</StyledButton>
                <StyledButton onClick={handleClick}>Veja suas escolhas!</StyledButton>
            </ButtonContainer>
        </SidebarContainer>
    );
};

const ButtonContainer = styled.div`
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Observations = styled.p`
    color: black;
    font-size: 10px;
    margin-top: -10px;
    text-align: left;
`;

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
  text-align: left;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`;