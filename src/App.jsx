import React, { useState } from "react";
import "./App.css";
import Form from "components/Form";
import List from "components/List";
import renderDate from "utils/renderDate";

const App = () => {
  const [todos, setTodos] = useState([{ id: 0, text: "", isDone: false }]);

  //수정 버튼 클릭
  const clickEditButtonHandler = (id) => {
    const text = prompt("수정할  텍스트를 입력해주세요");
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  //완료 버튼 클릭
  const clickCompleteButtonHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });
    setTodos(newTodos);
  };

  //삭제 버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const remainedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainedTodos);
  };

  return (
    <div className="layout">
      <div className="container">
        <h1>My Todo List</h1>
        <h3 className="Header-Day">{renderDate()}</h3>
      </div>
      <Form todos={todos} setTodos={setTodos} />
      <List
        todos={todos}
        clickEditButtonHandler={clickEditButtonHandler}
        clickCompleteButtonHandler={clickCompleteButtonHandler}
        clickRemoveButtonHandler={clickRemoveButtonHandler}
      />
    </div>
  );
};

export default App;
