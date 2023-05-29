import Header from "../Components/Header";
import styled from "styled-components";
import SideMenuHotels from "../Components/SideMenuHotels";
import Hotels from "../Components/Hotels";
import PageButtonHotels from "../Components/PageButtonHotels"

export default function HotelsPage() {
    return (
        <>
            <HotelsPageContainer>
                <Header />
                <ContentContainer>
                    <SideMenuHotels />
                    <HotelsContainer>
                        <Text>Escolha uma das opções abaixo:</Text>
                        <Hotels />
                        <PageButtonHotels />
                    </HotelsContainer>
                </ContentContainer>
            </HotelsPageContainer>
        </>
    );
}

const ContentContainer = styled.div`
    display: flex;
`;

const Text = styled.p`
    text-align: center;
    color: white;
    font-size: 25px;
    font-weight: 500;
`;

const HotelsContainer = styled.div`
    margin-top: 30px;
    width: calc(100vw - 300px);
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
`;

const HotelsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;