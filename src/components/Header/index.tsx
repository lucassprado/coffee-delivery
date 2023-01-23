import { MapPin, ShoppingCart } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'

import {
  HeaderContainer,
  LocaleContainer,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Coffee Delivery" />

      <div>
        <LocaleContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocaleContainer>

        <ShoppingCartContainer>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartContainer>
      </div>
    </HeaderContainer>
  )
}
