import React from 'react'
import { Field } from 'redux-form'

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name="newPostBody" placeholder='your news...' />
            <button>Add post</button>
        </form>
    )
}

export default AddPostForm