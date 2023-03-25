import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'success' | 'danger' | 'default'

interface ButtonProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.success};
`
