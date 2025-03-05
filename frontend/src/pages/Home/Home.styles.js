import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.spaceCadet};
  padding: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

export const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h2`
  color: ${props => props.theme.colors.spaceCadet};
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

export const CardContent = styled.p`
  color: ${props => props.theme.colors.paynesGray};
`;

