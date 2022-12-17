import { MdEmail, MdLock } from "react-icons/md";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Input } from '../../components/input';

import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";

const Login = () => {
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça o seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça o seu login e make the change._</SubTitleLogin>
                    <form>
                        <Input placeholder="E-mail"  leftIcon={MdEmail}/>
                        <Input placeholder="Senha" type="password" leftIcon={MdLock}/>
                        <Button title="Entrar" variant="secondary"></Button>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export { Login }