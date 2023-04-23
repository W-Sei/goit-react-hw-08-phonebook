import { Container, Section } from 'components/App/App.styled';
import { LoginForm } from 'components/LoginForm';
import { MainTitle } from 'pages/Home/Home.styled';

const Login = () => {
  return (
    <Section>
      <Container>
        <MainTitle>Log in</MainTitle>
        <LoginForm />
      </Container>
    </Section>
  );
};

export default Login;
