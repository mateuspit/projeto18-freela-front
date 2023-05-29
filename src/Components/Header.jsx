import styled from "styled-components";

export default function Header(){
    return(
        <>
            <TopBanner>✈️ 🏨 PLANEJADOR DE VIAGENS 🏨 ✈️</TopBanner>
        </>
    );
}

const TopBanner = styled.header`
    color: white;
    font-weight: 700;
    width: 100%;
    height: 50px;
    background-color: #3CB300;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    border-bottom: 2px solid white;
`;