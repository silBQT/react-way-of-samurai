import { addPostActionCreator, updateNewPostBodyActionCreator } from '../../../redux/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.posts,
    newPostBody: state.newPostBody
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostBody: (body) => {
      dispatch(updateNewPostBodyActionCreator(body));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer