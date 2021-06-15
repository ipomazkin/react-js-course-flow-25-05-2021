import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Topic1 from "./1_globalEvents";

class Checkbox extends React.Component {
  state = {
    isChecked: false,
  };

  handleClick = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="">Checkbox:</label>
        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleClick}/>
        <span>{this.state.isChecked ? "Checked" : "Not checked"}</span>
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    let { items, handleDelete } = this.props;

    return (
      <table>
        <tbody>
          {items.map((el, i) => (
            <tr key={i}>
              <th>#{i}</th>
              <th>{el.title}</th>
              <th>{el.description}</th>
              <th>{el.isSpecial && 'this is special'}</th>
              <th>
                <button onClick={() => handleDelete(i)}>Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

class Form extends React.Component {
  state = {
    title: "Test title",
    description: "Test description",
    isSpecial: false,
  };

  handleChangeTitle = (e) => {
    let val = e.target.value;
    this.setState({
      title: val,
    });
  };

  handleChangeDescr = (e) => {
    let val = e.target.value;
    this.setState({
      description: val,
    });
  };

  handleChangeIsSpecial = (e) => {
    let val = e.target.checked;
    this.setState({
      isSpecial: val,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let values = this.state;
    this.props.handleSubmit(values);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle}/></div>
        <div>Description: <input type="text" value={this.state.description} onChange={this.handleChangeDescr} name="description"/></div>
        <div>Special: <input type="checkbox" checked={this.state.isSpecial} onChange={this.handleChangeIsSpecial} name="isSpecial"/></div>
        <button>Create post</button>
      </form>
    );
  }
}

class Posts extends React.Component {
  state = {
    items: [
      {
        title: "Test item 1",
        description: "Lorem ipsum",
        isSpecial: false,
      },
      {
        title: "Test item 1",
        description: "Lorem ipsum",
        isSpecial: false,
      },
      {
        title: "Test item 1",
        description: "Lorem ipsum",
        isSpecial: false,
      }
    ],
  };

  handleFormSubmit = (values) => {
    this.setState({
      items: [
        ...this.state.items,
        values,
      ],
    });
  };

  handleDeleteItem = (itemIndex) => {
    this.setState({
      items: this.state.items.filter((el, i) => i !== itemIndex),
    });
  };

  renderSome = (type) => {
    switch (type) {
      case '1': return <span>1</span>
    }
  };

  render() {
    return (
      <Topic1 />
    );

    return (
      <div className="">
        {this.renderSome()}
        <Form handleSubmit={this.handleFormSubmit} />
        <Table handleDelete={this.handleDeleteItem} items={this.state.items} />
      </div>
    );
  }
}

class AdditionalLesson extends PureComponent {
  render() {
    return (
      <div className="">
        <Posts />
      </div>
    );
  }
}

export default AdditionalLesson;

AdditionalLesson.propTypes = {};

AdditionalLesson.defaultProps = {};
