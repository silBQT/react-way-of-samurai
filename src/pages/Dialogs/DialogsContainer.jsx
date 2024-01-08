import React from 'react';

import Dialogs from './Dialogs'

import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

  const updateNewMessageBody = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  };
  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

  return (<Dialogs updateNewMessageBody={updateNewMessageBody} sendMessage={sendMessage} dialogsPage={props.store.getState().dialogsPage} />)
};

export default DialogsContainer;