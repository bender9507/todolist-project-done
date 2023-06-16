import { useState } from "react";

function Form({ todos, setTodos }) {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  //추가 버튼 클릭
  const onSubmitButtonHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: todos.length,
      text,
      isDone: false,
    };
    console.log(newTodo);
    setText("");
    setTodos([...todos, newTodo]);
  };

  return (
    <form className="add-form" onSubmit={onSubmitButtonHandler}>
      <div className="input-group">
        <label className="input-label">Todo</label>
        <input
          className="add-input"
          value={text}
          onChange={onChangeHandler}
          required
        />
        <button className="add-button">ADD</button>
      </div>
    </form>
  );
}

export default Form;
