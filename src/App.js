import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Nav from './components/Nav.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'home page title'
      },
      inputs: {
        title: null,
        description: null,
        completed: null,
        id: null
      }
    }
  }

  handleView = (view, postData) => {
    let pageTitle = '';
    let inputs = {
      title: '',
      description: '',
      completed: '',
      id: null
    }

    switch (view) {
      case 'home':
        pageTitle = 'home page title'
        break;
      case 'newItem':
          pageTitle = 'new item page title'
          break
      case 'editItem':
          pageTitle = 'edit item page title'
          break
      default:
          break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      inputs: inputs
    })
  }

  render() {
    return(
      <div>
        <Nav
          handleView={this.handleView}
        />
        <Main
          handleView={this.handleView}
          view={this.state.view}
          inputs={this.state.inputs}
        />
      </div>
    )
  }
}

export default App;
