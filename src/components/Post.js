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
      </div>

      <div>
        <input type="checkbox" />
      </div>
    </article>
    )
  }
}

export default Post;
