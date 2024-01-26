import React from 'react'
import { Field } from 'redux-form'
import { Textarea } from '../../common/Preloader/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../../utils/validators/validators'

const maxLength50 = maxLengthCreator(50);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder='your message...' />
            <button>Send message</button>
        </form>
    )
}

export default DialogsForm