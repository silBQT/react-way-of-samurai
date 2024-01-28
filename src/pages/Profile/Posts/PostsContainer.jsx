import { addPost } from '../../../redux/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
};

export default connect(mapStateToProps, {
  addPost
})(Posts);