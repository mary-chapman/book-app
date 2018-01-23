import React, { Component } from 'react';

class RegItem extends Component {
    render() {
      return (
          <div className="item_read">
              <div className="item__title"><h2>{this.props.title}</h2></div>
              <div className="item__buttons">
                  <button onClick={() => this.props.handleRegMode()} className="item__edit-item">
                    edit
                  </button>

                  <button onClick={() => this.props.handleDelete(this.props.index)} className="item__delete-item">
                    del
                  </button>
              </div>
          </div>
      )
  }
}

export default RegItem;
