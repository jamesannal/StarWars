import React from 'react'
import ShipContainer from './ShipContainer'

class Ships extends React.Component{
  
  constructor(){
    super();
    this.state = {ships: []}
  }

  componentDidMount(){
    let url = 'http://swapi.co/api/starships/?format=json'
    const request = new XMLHttpRequest()
    request.open('GET', url);

    request.onload = () => {
      const responseData = JSON.parse(request.responseText)
      const shipContainer = responseData.results
      this.setState({ships: ShipContainer})
    }
    request.send()
  }

  render(){
    return(<ShipContainer ships={this.state.ships}/>
    )
  }
  
}

export default Ships

