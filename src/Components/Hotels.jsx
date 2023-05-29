import styled from "styled-components";
import Hotel from "./Hotel";

export default function Hotels() {
    return (
        <>
            <HotelsContainer>
                <Hotel />
                <Hotel />
                <Hotel />
                <Hotel />
                <Hotel />
                <Hotel />
            </HotelsContainer>
        </>
    );
}

const HotelsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  div {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;
