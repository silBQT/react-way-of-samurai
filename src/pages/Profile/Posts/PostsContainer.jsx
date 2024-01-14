import { addPost, updateNewPostBody } from '../../../redux/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostBody: state.profilePage.newPostBody
  }
};

const PostsContainer = connect(mapStateToProps, {
  updateNewPostBody,
  addPost
})(Posts);

export default PostsContainer