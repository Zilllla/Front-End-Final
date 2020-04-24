import React from 'react';
import axios from 'axios';
import Post from './Post.js';
import Form from './Form.js';

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:5000'
} else {
  console.log('this is for heroku');
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchPosts = () => {
  fetch(`${baseUrl}`)
  .then(data => data.json())
  .then(jData => {
    this.setState({
      posts: jData
    })
  }).catch(err => console.log(err))
  }

  handleCreate = (data) => {
    console.log(data);
  }

  componentDidMount() {
    axios.get(`${baseUrl}`)
      .then(res => {
        this.setState({ posts:res.data });
      })
      // .catch (err) => {
      //   console.log(err);
      // }
  };

  // componentDidMount() {
  //   this.fetchPosts()
  //   console.log();
  // }

  render() {
    return(
      <div>
      <h1>{this.props.view.pageTitle}</h1>
      <div>
      {this.props.view.page === 'home' ?
        this.state.posts.map((postData) => (
        <Post
          key={postData.id}
          postData={postData}
          handleView={this.props.handleView}
        />
      ))
      : <Form
          handleCreate={this.handleCreate}
        />
    }
      </div>
      </div>
    )
  }

}

export default Main;
