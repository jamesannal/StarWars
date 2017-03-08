import React from 'react'
import PlanetContainer from './PlanetContainer.jsx'

class Planets extends React.Component{
  constructor() {
    super();
    this.state = {planets: []}
  }

  componentDidMount() {
    let url = 'http://swapi.co/api/planets/?format=json'
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      const responseData = JSON.parse(request.responseText);
      const planetContainer = responseData.results;
      this.setState({planets: planetContainer});
    }

    request.send();
  }

  render() {
    return(<PlanetContainer planets={this.state.planets} />)
  }
}

export default Planets

