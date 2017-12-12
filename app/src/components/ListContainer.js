import React, { Component } from 'react';

import ListItem from './ListItem'
import AddForm from './AddForm';


class ListContainer extends Component {
    constructor(props) {
        super(props);

       this.state = {
           books: [{title: "book1"}, {title: "book2"}]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.addItem = this.addItem.bind(this);
        
    }
    addItem(event) {
        console.log("TEST")
        console.log(event.title.value)
    }
    deleteItem(index) {
        this.setState({ books: this.state.books.filter((x,i) => i != index) })
    }
    saveItem(input, index) {
        var copy = this.state.books.slice(); //create a copy of the array
        copy[index] = {title: input} //update the array
        this.setState({books: copy}) //update the state with the new object
    }

    render() {
        return (
            <div>
                { this.state.books.map((item, index) => {
                    return (
                        <div>
                            <AddForm 
                                handleAddItem = {this.addItem}
                            />
                            <ListItem title={item.title} 
                                    index={index}
                                    handleDelete={this.deleteItem}
                                    handleSave={this.saveItem}
                            />
                        </div>
                    )
                })}
            </div>
        )

    }
}

export default ListContainer;