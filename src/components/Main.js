import React from 'react';
import axios from 'axios';
import Post from './Post.js';
import Form from './Form.js';

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://blooming-plateau-41459.herokuapp.com'
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

//FETCH
  fetchPosts = () => {
  fetch(`${baseUrl}`)
  .then(data => data.json())
  .then(jData => {
    this.setState({
      posts: jData
    })
  }).catch(err => console.log(err))
  }

//CREATE
  handleCreate = (createData) => {
    console.log('create', createData);
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
      console.log(jsonedPost)
      this.props.handleView('home')
      this.setState(prevState => {
        console.log('state', prevState)
        prevState.posts = jsonedPost
        return {
          posts: prevState.posts
        }
      })
    }).catch(err => console.log(err))
    }

//UPDATE
  handleUpdate = (updatedData) => {
    console.log(updatedData);
    fetch(`${baseUrl}/${updatedData.id}`, {
      body: JSON.stringify(updatedData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(updatedItem => {
      this.props.handleView('home')
      this.fetchPosts()
    }).catch(err => console.log(err))
  }

//DELETE
  handleDelete = (id) => {
    console.log(id);
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(json => {
      this.fetchPosts()
      this.setState(prevState => {
        const posts = prevState.posts.filter(post => post._id !==id)
        return {posts}
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
          key={postData._id}
          postData={postData}
          handleView={this.props.handleView}
          handleDelete={this.handleDelete}
        />
      ))
      : <Form
          handleCreate={this.handleCreate}
          formInputs={this.props.formInputs}
          view={this.props.view}
          handleUpdate={this.handleUpdate}
        />
    }
      </div>
      </div>
    )
  }

}

export default Main;
