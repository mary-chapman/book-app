import React, { Component } from 'react';

class AddForm extends Component {
    render() {
        return (
            <div className="add-item" >
                <input ref={(input) => this.userInput = input} name="title" className="add-item__input" />
                <button onClick={() => this.props.handleAddItem(this.userInput)} className="add-item__button">+</button>
            </div>
        )

    }
}

export default AddForm;