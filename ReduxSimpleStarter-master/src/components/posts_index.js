import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('this would be a good time to call an action creator tofetch posts');
  }

  render() {
    return (
      <div>Lists of blog posts.</div>
    );
  }
}

export default PostsIndex;