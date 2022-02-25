import LogoImg from "../../assets/images/logo.svg";

import { Container, Img, BtnBack } from "./styles";

import { FiChevronLeft } from "react-icons/fi";

export function Header({ btnBack }) {
  function handleBackPage() {
    window.history.back();
  }

  return (
    <Container>
      <Img src={LogoImg} />

      {btnBack && (
        <BtnBack onClick={handleBackPage}>
          <FiChevronLeft size={16} />
          Voltar
        </BtnBack>
      )}
    </Container>
  );
}
