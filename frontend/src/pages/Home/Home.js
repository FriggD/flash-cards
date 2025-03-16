import React from 'react';
import { Button } from '../../components/StyledComponents';
import { HomeContainer, Header, Title, Grid, Card, CardTitle, CardContent } from './Home.styles';
import FlashCard from '../../components/FlashCard/FlashCard';
import { useNavigate } from 'react-router-dom';

function Home() {
  // Dummy data for demonstration
  const flashcardSets = [
    { id: 1, title: 'JavaScript Basics', cards: 20 },
    { id: 2, title: 'React Fundamentals', cards: 15 },
    { id: 3, title: 'CSS Tips & Tricks', cards: 25 },
  ];
  
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    // TODO: Implement logout logic
    navigate('/login');
  };

  return (
    <HomeContainer>
      <Header>
        <Title>My Flashcards</Title>
        <Button>Create New Set</Button>
        <Button onClick={handleLogout}>LogOut</Button>
      </Header>
      <Grid>
        {flashcardSets.map((set) => (
          <Card key={set.id}>
            <CardTitle>{set.title}</CardTitle>
            <CardContent>{set.cards} cards</CardContent>
          </Card>
        ))}
      </Grid>

      <Header>
        <Title>My Flashcards</Title>
        <Button>Create New Set</Button>
      </Header>
      <Grid>
        <FlashCard frente="valoraí" verso="valor" area="Frontend" categoria="Javascript"></FlashCard>
      </Grid>
    </HomeContainer>
  );
}

export default Home;