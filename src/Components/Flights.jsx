import styled from "styled-components";
import Flight from "./Flight";

export default function Flights() {
    return (
        <>
            <FlightsContainer>
                <Flight />
                <Flight />
                <Flight />
                <Flight />
                <Flight />
                <Flight />
            </FlightsContainer>
        </>
    );
}

const FlightsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  div {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;
