import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import Button from './Button.js'
import Icon from './Icon.js'
import HomeImg from '../img/home.svg'

import githubLogo from '../img/GitHub-Mark.svg'

const GitHubButton = () => {
  return (
    <a href={'https://github.com/Patrick564/planetarium-nasa-api'} target={'_blank'} rel={'noopener noreferrer'}>
      <Icon src={githubLogo} alt={'To GitHub'} />
    </a>
  )
}

const SearchButton = ({ close }) => {
  return (
    <Button onClick={close}>Search</Button>
  )
}

const Nav = ({ changeVisibility, ...props }) => {
  let location = useLocation().pathname

  return (
    <nav {...props}>
      <a href={'/'}>
        <Icon src={HomeImg} alt={'Home'} />
      </a>

      {location === '/' ?
        <GitHubButton /> :
        <SearchButton close={changeVisibility} />
      }
    </nav>
  )
}

const Navbar = styled(Nav)`
  align-items: center;
  background-color: #1A5863;
  display: flex;
  height: 2rem;
  justify-content: space-between;
  padding: 15px 30px;
  text-align: center;
`

export default Navbar
