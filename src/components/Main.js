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

  handleCreate = (createData) => {
    console.log(createData);
    fetch(`${baseUrl}/post`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdPost => {
      return createdPost.json()
    }).then(jsonedPost => {
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.posts = jsonedPost
        return {
          posts: prevState.posts
        }
      })
    }).catch(err => console.log(err))
  }

  // componentDidMount() {
  //   axios.get(`${baseUrl}`)
  //     .then(res => {
  //       this.setState({ posts:res.data });
  //     })
  //     // .catch (err) => {
  //     //   console.log(err);
  //     // }
  // };

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    return(
      <div>
      <h1>{this.props.view.pageTitle}</h1>
      <div>
    { this.props.view.page === 'home' ?
       this.state.posts.map((postData) => (
        <Post
          key={postData.id}
          postData={postData}
          handleView={this.props.handleView}
        />
      ))
      : <Form
          handleCreate={this.handleCreate}
          inputs={this.props.inputs}
          view={this.props.view}
        />
    }
      </div>
      </div>
    )
  }

}

export default Main;
