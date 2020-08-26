import React, { Component } from 'react';
import { addTodo } from './redux/todo/actions';
import { connect } from 'react-redux';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  handleAddTodo = () => {
    const { inputValue } = this.state;
    const { addTodoAction } = this.props;
    addTodoAction(inputValue);
    this.setState({
      inputValue: '',
    })
  }

  render() {
    const { inputValue } = this.state;
    const { todos } = this.props;
    return (
      <div>
        <input onChange={this.handleChange} value={inputValue} />
        <button onClick={this.handleAddTodo}>Agregar</button>
        <div>
          {
            todos.map((todo) => (
              <div>{todo.name}</div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoAction: (name) => dispatch(addTodo(name))
});

export default connect(mapStateProps, mapDispatchToProps)(TodoApp);
