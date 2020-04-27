import React from 'react';


class Post extends React.Component {

  render() {
    return(
    <article>
      <div className="item-outer-container">
        <h2>{this.props.postData.title}</h2>
        <div className="item-inner-container">
        <h3>{this.props.postData.description}</h3>
        <input type="checkbox" />
        <div className="edit-delete-container">
        <ul>
          <li
          onClick={() =>
            {this.props.handleView('editItem', this.props.postData)
          }}
          >Edit</li>
          <li
          onClick={() =>
            {this.props.handleDelete(this.props.postData._id)}}
            >Delete</li>
        </ul>
      </div>
      </div>
      </div>
    </article>
    )
  }
}

export default Post;
