import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  render(){
     const characters = [
       {
         name: 'Chalie',
         job: 'Developer',
       },
       {
        name: 'Maddy',
        job: 'Designer',
       },
       {
        name: 'Dee',
        job: 'Bartender',
       },
     ]

    return (
      <div className="container">
        <Table peopleData={characters} />
      </div>

    )
  }
}

export default App