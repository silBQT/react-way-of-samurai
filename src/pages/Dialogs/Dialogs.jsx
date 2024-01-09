import React from 'react';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

import styles from './Dialogs.module.scss'

const Dialogs = (props) => {

  const onChangeNewMessageBody = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };
  const onClickSendMessage = () => {
    props.sendMessage();
  }

  let newMessageBody = props.dialogsPage.newMessageBody,
  dialogElements = props.dialogsPage.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name} profPic={d.profPic} />),
  messageElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message} />);

  return (
    <div className={styles.dialogs}>
      <h2>Dialogs</h2>
      <div className={styles.dialogs__wrapper}>
        <div className={styles.dialogs__items}>
          {dialogElements}
        </div>
        <div className={styles.dialogs__messages}>
          {messageElements}
          <textarea onChange={onChangeNewMessageBody} value={newMessageBody} name="message_desc" placeholder='your message...'></textarea>
          <button onClick={onClickSendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;