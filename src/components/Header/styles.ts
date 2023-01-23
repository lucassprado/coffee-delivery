import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 0.75rem;
  }
`

export const LocaleContainer = styled.div`
  padding: 0.625rem 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    font-size: 14px;
    color: ${(props) => props.theme['purple-dark']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ShoppingCartContainer = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
