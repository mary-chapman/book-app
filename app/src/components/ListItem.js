import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {isEditMode: false}
    }

    regMode() {
        return (
            <div className="item_read">
                <div className="item__title"><h2>{this.props.title}</h2></div>
                <div className="item__buttons">
                    <button onClick={() => this.setState({isEditMode: true})} className="item__edit-item">edit</button>
                    <button onClick={() => this.props.handleDelete(this.props.index)} className="item__delete-item">del</button>
                </div>        
            </div>
        )
    }
    editMode() {
        return (
            <div className="item_edit">
                <input ref={(input) => this.userInput = input} className="item__input" placeholder={this.props.title} />
                <div className="item__buttons">
                    <button 
                        onClick={() => {
                            this.props.handleSave(this.userInput.value, this.props.index)
                            this.setState({isEditMode: false})
                        }}
                        className="item__save-item">
                        save
                    </button>
                    <button onClick={() => this.setState({isEditMode: false})} className="item__-item">cancel</button>
                </div>    
            </div>
        )
    }
    render() {
        return (this.state.isEditMode) ? this.editMode() : this.regMode()
    }
}

export default ListItem;