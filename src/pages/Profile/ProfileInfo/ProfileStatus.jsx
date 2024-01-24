import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        isEditMode: false,
        status: this.props.status
    }
    
    activateEditMode = () => {
        this.setState({
            isEditMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            isEditMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('did');
    }
    render() {
        if (!this.state.isEditMode) return (
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || "Нет статуса"}</span>
            </div>
        )
        return (
            <div>
                <input onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status} />
                
            </div>
        )
    }
}

export default ProfileStatus