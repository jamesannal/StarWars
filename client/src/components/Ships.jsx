import React from 'react'
import ShipContainer from './ShipContainer'

class Ships extends React.Component{
  constructor(){
    super();
    this.state = {starships: []}
  }

  componentDidMount(){
    let url = 'http://swapi.co/api/starships/?format=json'
    const request = new XMLHttpRequest()
    request.open('GET', url);

    request.onload = () => {
      const responseData = JSON.parse(request.responseText)
      const ShipContainer = responseData.results
      this.setState({starships: ShipContainer})
    }
    request.send()
  }

  render(){
    return(<ShipContainer starships={this.state.starships}/>
    )
  }
  
}

export default Ships

