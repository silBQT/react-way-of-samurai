import React from 'react'
import { Field } from 'redux-form'

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name="newMessageBody" placeholder='your message...' />
            <button>Send message</button>
        </form>
    )
}

export default DialogsForm