import React, { Component } from 'react';

import ListItem from './ListItem';
import AddForm from './AddForm';


class ListContainer extends Component {
    constructor(props) {
      super(props);
      this.state = { books: [{title: "The Great Gatsby"}, {title: "Oliver Twist"}] }
    }
    addItem(input) {
        if (input.value) {
            var copy = this.state.books.slice(); //create a copy of the array
            copy.push({title: input.value}); //adds the new object to the array
            this.setState({books: copy}); //sets the new state as the updated copy

            input.value = "";
        }
    }
    deleteItem(index) {
        this.setState({ books: this.state.books.filter((x,i) => i !== index) })
    }
    saveItem(input, index) {
        if (input) {
            var copy = this.state.books.slice(); //create a copy of the array
            copy[index] = {title: input} //update the array
            this.setState({books: copy}) //update the state with the new object
        }
    }
    render() {
        return (
            <div>
                <AddForm handleAddItem = {this.addItem.bind(this)} />

                { this.state.books.map((item, index) => {
                    return (
                            <ListItem key={index}
                                      title={item.title}
                                      index={index}
                                      handleDelete={this.deleteItem.bind(this)}
                                      handleSave={this.saveItem.bind(this)} />
                    )
                })}

            </div>
        )

    }
}

export default ListContainer;
