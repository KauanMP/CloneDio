import { Link } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import bannerImage from "../../assets/banner.png";
import { useNavigate } from 'react-router-dom/dist';

import { Container, TextContent, Title, TitleHightLight } from "./styles";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHightLight>
                        Implemente
                        <br />
                    </TitleHightLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={bannerImage} alt="Imagem 
                Principal" />
            </div>
        </Container>
    </>
    )
}

export { Home }