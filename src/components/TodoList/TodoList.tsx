import React from 'react';
import classnames from 'classnames';
import { Todo } from '../../types/Todo';

interface Props {
  todos: Todo[];
  selectedTodo: Todo | null;
  onTodoSelected: (todo: Todo) => void;
}

export const TodoList: React.FC<Props> = ({
  todos,
  selectedTodo,
  onTodoSelected,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map((todo) => (
        <tr
          key={todo.id}
          data-cy="todo"
          className={classnames({
            'has-background-info-light': selectedTodo === todo,
          })}
        >
          <td className="is-vcentered">
            {todo.id}
          </td>
          <td className="is-vcentered">
            {todo.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            )}
          </td>
          <td className="is-vcentered is-expanded">
            <p className={classnames({
              'has-text-success': todo.completed,
              'has-text-danger': !todo.completed,
            })}
            >
              {todo.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              className="button"
              type="button"
              onClick={() => onTodoSelected(todo)}
            >
              <span className="icon">
                <i className={classnames(
                  'far',
                  {
                    'fa-eye': selectedTodo !== todo,
                    'fa-eye-slash': selectedTodo === todo,
                  },
                )}
                />
              </span>
            </button>
          </td>
        </tr>
      ))}

    </tbody>
  </table>
);
