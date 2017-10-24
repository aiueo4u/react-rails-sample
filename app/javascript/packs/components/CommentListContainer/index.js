import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import './style.css'

class CommentListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }

    this.fetchComments = this.fetchComments.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.fetchComments()
  }

  fetchComments() {
    return fetch('/api/comments')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          comments: json
        })
      })
  }

  refresh() {
    this.fetchComments()
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map((comment, i) => (
            <li key={i} onClick={this.refresh} className="commentItem">{comment}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default CommentListContainer;
