import React from 'react'
import PersonContainer from './PersonContainer'

class People extends React.Component{
  constructor() {
    super();
    this.state = {people: []}
  }

  componentDidMount() {
    let url = 'http://swapi.co/api/people/?format=json'
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      const responseData = JSON.parse(request.responseText);
      const personContainer = responseData.results;
      this.setState({people: personContainer});
    }

    request.send()
  }

  render() {
    return(<PersonContainer people={this.state.people} />)
  }
}

export default People