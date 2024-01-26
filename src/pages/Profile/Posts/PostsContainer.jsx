import { addPost } from '../../../redux/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
};

const PostsContainer = connect(mapStateToProps, {
  addPost
})(Posts);

export default PostsContainer