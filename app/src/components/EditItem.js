import React, { Component } from 'react';

class EditItem extends Component {

    render() {
        return (
            <div className="item_edit">
                <input ref={(input) => this.userInput = input} className="item__input" placeholder={this.props.title} />
                <div className="item__buttons">
                    <button
                        onClick={() => {
                            this.props.handleSave(this.userInput.value, this.props.index)
                            this.props.handleEditMode()
                        }}
                        className="item__save-item">
                        save
                    </button>
                    <button onClick={() => this.props.handleEditMode()} className="item__-item">cancel</button>
                </div>
            </div>
        )
    }
}

export default EditItem;
