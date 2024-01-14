import Dialogs from './Dialogs'

import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage
})(Dialogs);

export default DialogsContainer;