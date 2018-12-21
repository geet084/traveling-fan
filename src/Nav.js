import React, { Component } from 'react';
import './Nav.scss';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      team: null
    }
  }

  submitSearch = (e) => {
    e.preventDefault();
    this.props.findSearchedTeam(this.state.team);
  }
  
  setInputValue = (e) => { 
    this.setState({
      team: e.target.value
    })
    
  }

  render() {
    return (
      <nav className="nav-area">
        <form action="#">
          <input type="text"
                 placeholder="Enter team name"
                 onChange={this.setInputValue}/>
          <button className="search-btn"
                  type="submit" 
                  onClick={this.submitSearch} >Submit</button>
          <label htmlFor="division-select">Select an NFL Division:</label>

          <select id="division-select">
            <option value="afc">--AFC Division--</option>
            <option value="afc-north">AFC North</option>
            <option value="afc-east">AFC East</option>
            <option value="afc-south">AFC South</option>
            <option value="afc-west">AFC West</option>
            <option value="nfc">--NFC Division--</option>
            <option value="nfc-north">NFC North</option>
            <option value="nfc-east">NFC East</option>
            <option value="nfc-south">NFC South</option>
            <option value="nfc-west">NFC West</option>
          </select>

        </form>
      </nav>
    )
  }
}