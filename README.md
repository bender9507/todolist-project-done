# ✨ Todo-List 개인과제 ver.2 ✨

- ver.2 : Styled-component 활용, redux, react-router-dom 적용

## 🔧 기술 스택

- Javascript
- Styled-component
- Redux
- React-router-dom

## 🗂️ 주요 폴더

```
📦src
 ┣ 📂components    # 컴포넌트들을 모아놓은 폴더
 ┃ ┣ 📂Form.jsx    # todo form 영역 컴포넌트
 ┃ ┗ 📂List.jsx    # todolist 영역 컴포넌트
 ┣ 📂pages         # 페이지별 컴포넌트를 모아놓은 폴더
 ┃ ┣ 📂Detail.jsx  # 각 todo의 상세페이지를 보여주는 컴포넌트
 ┃ ┗ 📂Home.jsx    # 초기화면을 보여주는 컴포넌트
 ┣ 📂redux         # 상태관리 redux 설정 및 리듀서를 모은 폴더
 ┃ ┣ 📂config      # redux store가 있는 폴더
 ┃ ┗ 📂modules     # redux의 reducer들을 모아놓은 폴더
 ┣ 📂shared        # React Router Dom 설정하는 폴더
 ┃ ┗📂Router.js    # Router 설정 파일
 ┣ 📂utils         # 기타 기능(날짜)
 ┃ ┗📂renderDate.js

```

## 내용

- ADD 버튼으로 todo 내용을 입력할 수 있다.
- 각 리스트에 있는 수정, 완료(또는 취소), 삭제 버튼으로 리스트 영역이 변경된다.
  - 🗑️ 버튼으로 내용을 삭제할 수 있다.
  - ✐ 버튼을 누르면 prompt창이 떠 내용을 수정할 수 있다.
  - ☑️ 완료 버튼을 누르면 해당 todo가 DONELIST 완료 목록으로 이동한다.
  - X 취소 버튼을 누르면 완료 목록이 있던 해당 todo가 TODOLIST 목록으로 이동한다.
- 리스트 내용을 누르면 해당 리스트 상세페이지로 이동한다.
  - 상세페이지에서 BACK 버튼을 누르면 초기화면으로 이동한다.
