import React from 'react';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

import styles from './Dialogs.module.scss'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

  const onChangeNewMessageBody = (e) => {
    const body = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body));
  };
  const onClickSendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }

  const dialogElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} profPic={d.profPic} />)
  const messageElements = props.state.messages.map(m => <Message id={m.id} message={m.message} />);

  return (
    <div className={styles.dialogs}>
      <h2>Dialogs</h2>
      <div className={styles.dialogs__wrapper}>
        <div className={styles.dialogs__items}>
          {dialogElements}
        </div>
        <div className={styles.dialogs__messages}>
          {messageElements}
          <textarea onChange={onChangeNewMessageBody} value={props.state.newMessageBody} name="message_desc" placeholder='your message...'></textarea>
          <button onClick={onClickSendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;