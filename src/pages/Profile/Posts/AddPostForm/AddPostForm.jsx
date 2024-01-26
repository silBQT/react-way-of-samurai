import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/Preloader/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength50]} name="newPostBody" placeholder='your news...' />
            <button>Add post</button>
        </form>
    )
}

export default AddPostForm