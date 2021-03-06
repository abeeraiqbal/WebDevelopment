import React, { Component } from "react"

class Comment extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1 className="title">Please leave your feedback below</h1>
        <form onSubmit={this.addComment}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Your name"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                name="comment"
                placeholder="Add a comment"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Comment
