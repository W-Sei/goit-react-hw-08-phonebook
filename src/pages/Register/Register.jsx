import { Container, Section } from 'components/App/App.styled';
import { RegisterForm } from 'components/RegisterForm';
import { MainTitle } from 'pages/Home/Home.styled';

const Register = () => {
  return (
    <Section>
      <Container>
        <MainTitle>Register</MainTitle>
        <RegisterForm />
      </Container>
    </Section>
  );
};

export default Register;
