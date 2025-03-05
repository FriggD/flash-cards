import styled from 'styled-components';

export const Card = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid ${props => props.theme.colors.periwinkle};
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${props => props.theme.colors.royalPurple};
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.royalPurple};
  color: ${props => props.theme.colors.white};
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.amethyst};
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${props => props.theme.colors.spaceCadet};
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.periwinkle};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;