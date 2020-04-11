import React, { useEffect, useState } from 'react'
import { 
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
    console.log('Weather Response: ', response)
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
      <NavbarBrand>
        <NavbarItem>{ dateStr }</NavbarItem>
      </NavbarBrand>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem hasDropdown isHoverable>
            <NavbarItem>Apps</NavbarItem>
            <NavbarDropdown>
              <NavbarItem href="https://192.168.1.12:9090">sabNZBD</NavbarItem>
              <NavbarItem href="http://192.168.1.12:5050">CouchPotato</NavbarItem>
              <NavbarItem href="http://192.168.1.12:8989">Sonarr</NavbarItem>
              <NavbarItem href="http://192.168.1.12:8112">Deluge</NavbarItem>
              <NavbarItem href=""></NavbarItem>
              <NavbarItem href=""></NavbarItem>
            </NavbarDropdown>  
          </NavbarItem>
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
    </Navbar>
  )
}

export default Header
