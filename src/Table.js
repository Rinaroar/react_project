import React, {Component} from 'react';


// custom class componen
/* class Table extends Component {
  render () {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Maddy</td>
            <td>Designer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table */


// simple component (which is a function)

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}


// hard-coded data
/* const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td> Developer</td>
      </tr>
      <tr>
        <td>Maddy</td>
        <td>Designer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  )
} */

// Using props removing data
const TableBody = () => {
  return <tbody />
}
// data will be moved to an array of objects (as if we were bringing in a JSON-based API)
// In App.js

class Table extends Component {
  render(){
    const {peopleData} = this.props

    return (
      <table>
        <TableHeader />
        <TableBody peopleData={peopleData} />
      </table>
    )
  }
}

export default Table