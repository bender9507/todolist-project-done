import { useState } from "react";

function Form({ todos, setTodos }) {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  //추가 버큰 클릭
  const onSubmitButtonHandler = (e) => {
    e.preventDefault(); //form의 새로고침 방지, 왜 e를 붙여야 할까, 함수의 event객체다

    const newTodo = {
      id: todos.length,
      text,
      isDone: false,
    };
    console.log(newTodo);
    setText(""); //value 초기화
    setTodos([...todos, newTodo]);
  };
  // console.log(setTodos);
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
