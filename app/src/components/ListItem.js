import React, { Component } from 'react';

import EditItem from './EditItem';
import RegItem from './RegItem';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = { isEditMode: false }
    }

    render() {
        return (this.state.isEditMode) ?
          <EditItem handleEditMode = {() => this.setState({isEditMode: false})} {...this.props} /> :
          <RegItem handleRegMode = {() => this.setState({isEditMode: true})} {...this.props} />
    }
}

export default ListItem;
