import React from 'react';

class Post extends React.Component {
  render() {
    return(
    <article>
      <div>
        <h2>{this.props.postData.title}</h2>
      </div>

      <div>
        <p>{this.props.postData.description}</p>
        <input type="checkbox" />
      </div>

      <div>
        <ul>
          <li
          // onClick={() =>
          //   {this.props.handleView('editItem', this.props.postData)
          // }}
          >Edit</li>
          <li>Delete</li>
        </ul>
      </div>
    </article>
    )
  }
}

export default Post;
