import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Nav from './components/Nav.js';
import Header from './components/Header.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'To Do List'
      },
      formInputs: {
        title: null,
        description: null,
        completed: null,
        id: null
      }
    }
  }

  handleView = (view, postData) => {
    let pageTitle = '';
    let formInputs = {
      title: '',
      description: '',
      completed: false,
      id: null
    }

    switch (view) {
      case 'home':
        pageTitle = 'To Do List'
        break
      case 'newItem':
          pageTitle = 'Add To Do Item'
          break
      case 'editItem':
          pageTitle = 'Edit To Do Item'
          formInputs = {
            title: postData.title,
            description: postData.description,
            completed: postData.completed,
            id: postData._id
          }
          break
      default:
          break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }

  render() {
    return(
      <div>
        <Header />
        <Nav
          handleView={this.handleView}
        />
        <Main
          handleView={this.handleView}
          view={this.state.view}
          formInputs={this.state.formInputs}
        />
      </div>
    )
  }
}

export default App;
