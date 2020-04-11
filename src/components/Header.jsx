import React, { useEffect, useState } from 'react'
import { 
  Container,
  Navbar,
  NavbarItem,
  NavbarBrand,
  NavbarMenu,
  NavbarStart,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd
} from 'bloomer'
import { GetLocation } from '../events/location'
import { GetWeather } from '../events/weather'

const Header = () => {
  const dateStr = new Date().toDateString()
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)

  const handleWeather = response => {
    setWeather(response)
  }

  const handleLocation = response => {
    setLocation(response.coords)
    
    GetWeather(response.coords)
      .then(response => handleWeather(response)) 
      .catch(error => console.error(error))
  }

  useEffect(() => {
    GetLocation()
      .then(response => handleLocation(response))
      .catch(error => console.error(error))
  }, [])

  return (
    <Navbar>
      <Container>
      <NavbarBrand>
        <NavbarItem>{ dateStr }</NavbarItem>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem hasDropdown isHoverable>
            <NavbarItem>Torrents</NavbarItem>
            <NavbarDropdown>
              <NavbarItem href="https://iptorrents.com">IPTorrents</NavbarItem>
              <NavbarItem href="https://drunkenslug.com">Drunken Slug</NavbarItem>
              <NavbarItem href="https://dognzb.cr">DogNZB</NavbarItem>
              <NavbarItem href="https://nzbgeek.info">NZBGeek</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
          <NavbarItem href="https://192.168.1.12:9090">sabNZBD</NavbarItem>
          <NavbarItem href="http://192.168.1.12:5050">CouchPotato</NavbarItem>
          <NavbarItem href="http://192.168.1.12:8989">Sonarr</NavbarItem>
          <NavbarItem href="http://192.168.1.12:8112">Deluge</NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          { weather !== null && (
            <>
              <NavbarItem><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /></NavbarItem>
              <NavbarItem>{ weather.main.temp } Degrees, { weather.weather[0].main }</NavbarItem> 
            </>
          )}
        </NavbarEnd>
      </NavbarMenu>
      </Container>
    </Navbar>
  )
}

export default Header
