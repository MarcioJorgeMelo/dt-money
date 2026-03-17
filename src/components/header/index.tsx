import { HeaderContainer, HeaderContent, NewTransctionButton } from "./styles";
import logoImg from "../../assets/image.png"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <NewTransctionButton>Nova Transação</NewTransctionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}