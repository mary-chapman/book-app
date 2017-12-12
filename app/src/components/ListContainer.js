import React, { Component } from 'react';

import ListItem from './ListItem'

class ListContainer extends Component {
    constructor(props) {
        super(props);

       this.state = {
           books: [{title: "book1"}, {title: "book2"}]
        }
    }

    render() {
        return (
            <div>
                { this.state.books.map((i) => {
                    return (
                        <ListItem title="X" />
                    )
                })}
            </div>
        )

    }
}

export default ListContainer;