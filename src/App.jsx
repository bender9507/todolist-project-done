import React, { useState } from "react";
import "./App.css";
import Form from "components/Form";
import List from "components/List";


const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([{ id: 0, text: "", isDone: false }]);

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  //날짜
  const [nowDate] = useState(new Date());

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

  //완료 버튼 클릭
  const clickCompleteButtonHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        //버튼 클릭하면 false였던 isDone을 true로 바꿔줘서 done리스트 항목 if문 작동하게 함
        return { ...todo, isDone: !todo.isDone };
      } else {
        //버튼 클릭하지 않으면 화면 변화 없음
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
  
  const RenderDate = () => {
    if (nowDate) {
      const dayToKorean = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
      const year = nowDate.getFullYear();
      const month = String(Number(nowDate.getMonth()) + 1);
      const date = nowDate.getDate();
      const day = nowDate.getDay() - 1;

      return year + "/ " + month + "/ " + date + "/ " + dayToKorean[day] + "";
    }
    return "";
  };
  
  return (
    <div className="layout">
      <div className="container">
        <h1>My Todo List</h1>
        <h3 className="Header-Day">{RenderDate()}</h3>
      </div>
      {/* button에 붙어있을 땐 submit감지 못함 */}
      <Form text={text} onSubmitButtonHandler={onSubmitButtonHandler} onChangeHandler={onChangeHandler} />
      <List todos={todos} clickCompleteButtonHandler={clickCompleteButtonHandler} clickRemoveButtonHandler={clickRemoveButtonHandler}/>
    </div>
  );
};

export default App;
