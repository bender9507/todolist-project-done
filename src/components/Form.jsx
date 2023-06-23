import { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { addTodo } from "redux/modules/todo";
import styled from "styled-components";

const Addform = styled.form`
  align-items: center;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding: 50px;
  justify-content: center;
`;

const Inputgroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding: 50px;
  justify-content: center;
`;

const Inputlabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

const Addinput = styled.input`
  background-color: #eee;
  font-family: "GangwonEduSaeeum_OTFMediumA";
  font-size: 25px;

  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
const Addbutton = styled.button`
  background-color: burlywood;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 70px;
  transition: 0.4s;
  &:hover {
    background-color: #ddd;
  }
`;

function Form() {
  const [text, setText] = useState("");

  const dispatch = useDispatch(); // dispatch 생성

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  //추가 버튼 클릭
  const onSubmitButtonHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      text,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    setText("");
  };

  return (
    <Addform onSubmit={onSubmitButtonHandler}>
      <Inputgroup>
        <Inputlabel>Todo</Inputlabel>
        <Addinput
          className="add-input"
          value={text}
          onChange={onChangeHandler}
          maxLength="22"
          required
        />
        <Addbutton className="add-button">ADD</Addbutton>
      </Inputgroup>
    </Addform>
  );
}

export default Form;
