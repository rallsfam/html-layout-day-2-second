createPost() {
  const { text } = this.state;
  const { createPostFn } = this.props;

  createPostFn( text );
  this.setState({ text: '' });
}