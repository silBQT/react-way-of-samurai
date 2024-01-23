import Dialogs from './Dialogs'

import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    }
};

export default compose(
  connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
  }),
  withAuthRedirect
)(Dialogs)