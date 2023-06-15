const List = ({todos, clickCompleteButtonHandler, clickRemoveButtonHandler}) => {

    return (
  
      <div className="list-container">
      <h2 className="list-title">working</h2>
      <div className="list-wrapper">
        {todos.map(function (item) {
          if (item.isDone === false)
            return (
              <div key={item.id} className="todo-container">
                <div className="todo-list">{item.text}</div>
                <div className="button-set">
                  {/* <button
                    type="button"
                    className="todo-edit-button"
                    onClick={() => clickEditButtonHandler(item.id)}
                  >
                    ✐
                  </button> */}
                  <button
                    className="todo-complete-button"
                    onClick={() => clickCompleteButtonHandler(item.id)}
                  >
                    ☑️
                    {/* {item.isDone ? "X" : "☑️"} */}
                  </button>
  
                  <button
                    className="todo-delete-button"
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            );
        })}
      </div>
      <h2 className="list-title">done</h2>
      <div className="list-wrapper">
        {todos.map(function (item) {
          if (item.isDone === true)
            return (
              <div key={item.id} className="todo-container">
                <div className="todo-list">{item.text}</div>
  
                <div className="button-set">
                  {/* <button
                    type="button"
                    className="todo-edit-button"
                    onClick={() => clickEditButtonHandler(item.id)}
                  >
                    ✐
                  </button> */}
                  <button
                    className="todo-complete-button"
                    onClick={() => clickCompleteButtonHandler(item.id)}
                  >
                    X{/* {item.isDone ? "X" : "☑️"} */}
                  </button>
                  <button
                    className="todo-delete-button"
                    onClick={() => clickRemoveButtonHandler(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            );
        })}
      </div>
    </div>
    )
  }
  export default List;