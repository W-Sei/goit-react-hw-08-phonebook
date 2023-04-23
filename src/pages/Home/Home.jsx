import { Container, Section } from 'components/App/App.styled';
import { TitleImage } from '../../components/TitleImage/TitleImage.styled';
import { MainTitle } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <TitleImage />
      </Container>
    </Section>
  );
};

export default Home;
