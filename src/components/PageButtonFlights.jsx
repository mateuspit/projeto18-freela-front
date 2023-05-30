import React from 'react';
import styled from 'styled-components';

export default function PageButtonFlights(){
    return (
        <div>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
        </div>
    );
};

const Button = styled.button`
  color: white;
  margin-bottom: 30px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 16px;
  background-color: #4CAF50;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;