// 액션
export const ADD_TODO = "TODO/ADD_TODO";
export const REMOVE_TODO = "TODO/REMOVE_TODO";
export const TOGGLE_TODO = "TODO/TOGGLE_TODO";
export const EDIT_TODO = "EDIT/TOGGLE_TODO";

// 액션 크리에이터
export const addTodo = (todo) => ({ type: ADD_TODO, todo });
export const removeTodo = (todoId) => ({ type: REMOVE_TODO, todoId });
export const toggleTodo = (todoId) => ({ type: TOGGLE_TODO, todoId });
export const editTodo = (todoId, text) => ({ type: EDIT_TODO, todoId, text });

// 초기 상태값
const initialState = [];

// 리듀서: 변화를 일으키는 함수
const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];

    case REMOVE_TODO:
      const deletedTodoList = state.filter((todo) => todo.id !== action.todoId);

      return deletedTodoList;

    case TOGGLE_TODO:
      const updatedTodoList = state.map((todo) =>
        todo.id === action.todoId ? { ...todo, isDone: !todo.isDone } : todo
      );

      return updatedTodoList;

    case EDIT_TODO:
      const editTodoList = state.map((todo) =>
        todo.id === action.todoId ? { ...todo, text: action.text } : todo
      );

      return editTodoList;

    default:
      return state;
  }
};

export default todo;
