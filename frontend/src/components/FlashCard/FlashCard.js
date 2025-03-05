import React from 'react';
import { Button } from '../../components/StyledComponents';
import { FlashCardContainer, Header, Title, Grid, Card, CardTitle, CardContent } from './FlashCard.styles';

function FlashCard({frente, verso, area, categoria}) {
  // Dummy data for demonstration

  return (
    <FlashCardContainer>
      {frente && verso && area && categoria ? (
        <Grid>
          <Card>{area}/{categoria}
            <CardTitle>{frente}</CardTitle>
            <CardContent>{verso}</CardContent>
          </Card>
          
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
      {/* https://codepen.io/noraspice/pen/ONzKNE */}
    </FlashCardContainer>
  );
}

export default FlashCard;