import React, { useState } from 'react'

const ProfileStatusWithHooks = (props) => {

    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const activateEditMode = () => {
        setEditMode(true);
    }

    if (!editMode) return (
        <div>
            <span onDoubleClick={activateEditMode}>{props.status || "Нет статуса"}</span>
        </div>
    )
    return (
        <div>
            <input onChange={onChangeStatus} onBlur={deactivateEditMode} autoFocus={true} value={status} />
        </div>
    )
}

export default ProfileStatusWithHooks