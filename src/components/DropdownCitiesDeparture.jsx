import React from 'react';
import styled from 'styled-components';
import { TravelContext } from '../contexts/TravelContext.jsx';
import { useContext } from "react";

export default function DropdownCitiesDeparture() {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef();
    const { selectedDestinationCity, setSelectedDepartureCity } = useContext(TravelContext);
    const [selectedCity, setSelectedCity] = React.useState('');

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    function handleCitySelection(city) {
        //console.log("selectedDepartureCity", city)
        //console.log("selectedDestinationCity", selectedDestinationCity)
        if (city !== selectedDestinationCity) {
            setSelectedCity(city);
            setSelectedDepartureCity(city);
            setSelectedCity(city);
        }
        else if ((city === '' || selectedDestinationCity === '')) {
            setSelectedCity(city);
            setSelectedDepartureCity(city);
            setSelectedCity(city);
        }
        else {
            alert("Escolha uma cidade diferente para a origem!");
            setSelectedCity('');
        }
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <DropdownContainer ref={dropdownRef}>
            <InputField
                type="text"
                placeholder="Selecione a cidade de partida"
                onClick={handleDropdownClick}
                value={selectedCity}
                readOnly
            />
            <DropdownMenu style={{ display: isOpen ? 'block' : 'none' }}>
                <DropdownItem onClick={() => handleCitySelection('Rio de Janeiro')}>Rio de Janeiro</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('São Paulo')}>São Paulo</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('Salvador')}>Salvador</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('Fortaleza')}>Fortaleza</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('Recife')}>Recife</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('Florianópolis')}>Florianópolis</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('Porto Alegre')}>Porto Alegre</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('Manaus')}>Manaus</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('Brasília')}>Brasília</DropdownItem>
                <DropdownItem onClick={() => handleCitySelection('Foz do Iguaçu')}>Foz do Iguaçu</DropdownItem>
            </DropdownMenu>
        </DropdownContainer>
    );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const InputField = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: none;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
`;
