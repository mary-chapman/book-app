import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <form>
                <div className="add-item" >
                    <input name="title" className="add-item__input" />
                    <button onClick={(e) => {
                            e.preventDefault();
                            this.props.handleAddItem(this.form) 
                        }
                    }
                    type="submit" className="add-item__button">+</button>
                </div>
            </form>
        )

    }
}

export default AddForm;