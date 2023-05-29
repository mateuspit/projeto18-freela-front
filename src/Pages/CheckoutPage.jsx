import Header from "../Components/Header";
import Checkout from "../Components/Checkout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



export default function CheckoutPage() {

    const navigate = useNavigate();

    function toHome() {
        navigate("/");
    }

    function toFavs() {
        navigate("/");
    }

    return (
        <>
            <CheckoutPageContainer>
                <Header />
                <CheckoutContainer>
                    <Checkout />
                </CheckoutContainer>
                <ButtonContainer>
                    <StyledButton onClick={toHome}>Vá para pagina inicial</StyledButton>
                    <StyledButton onClick={toFavs}>Salve seu planejamento</StyledButton>
                </ButtonContainer>
            </CheckoutPageContainer>
        </>
    );
}

const CheckoutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 600px;
    margin-top: 30px;
    margin-bottom: 15px;
    justify-content: space-between;
    align-items: center;
`;

const StyledButton = styled.button`

  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;
`;

const CheckoutContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;