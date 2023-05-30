import React from 'react';
import styled from 'styled-components';
import { TravelContext } from '../contexts/TravelContext.jsx';
import { useContext } from "react";

export default function DropdownCitiesDestination() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedCity, setSelectedCity] = React.useState('');
    const { setSelectedDestinationCity, selectedDepartureCity } = useContext(TravelContext);
    const dropdownRef = React.useRef();

    //useEffect(() => {
    //    //console.log(selectedDestinationCity);
    //    //console.log(selectedDepartureCity);
    //    if ((selectedDepartureCity === selectedDestinationCity) && (selectedDepartureCity !== false)) {
    //        setSelectedCity('');
    //    }
    //}, [selectedDestinationCity, selectedDepartureCity]);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCitySelection = (city) => {
        //console.log(!(selectedDepartureCity === city));
        //console.log((selectedDepartureCity !== ''));
        //console.log("selectedDepartureCity", selectedDepartureCity)
        //console.log("selectedDepartureCity", city)
        if (selectedDepartureCity !== city) {
            setSelectedCity(city);
            setSelectedDestinationCity(city);
            setSelectedCity(city);
        }
        else if ((selectedDepartureCity === '' || city === '')) {
            setSelectedCity(city);
            setSelectedDestinationCity(city);
            setSelectedCity(city);
        }
        else {
            alert("Escolha uma cidade diferente para o destino!");
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
                placeholder="Selecione a cidade de destino"
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