import { ButtonContainer, ButtonVariant } from './Button.style'

interface ButtonProps {
  variant: ButtonVariant
}

export default function Button({ variant = 'default' }: ButtonProps) {
  return <ButtonContainer variant={variant}>dsads </ButtonContainer>
}
