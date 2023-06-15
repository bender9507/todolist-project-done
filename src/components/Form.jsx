const Form = ({onSubmitButtonHandler, text, onChangeHandler}) => {
  
    return (
      <form className="add-form" onSubmit={onSubmitButtonHandler}>
        <div className="input-group">
          <label className="input-label">Todo</label>
          <input className="add-input" value={text} onChange={onChangeHandler} required />
          <button className="add-button">ADD</button>
        </div>
      </form>
    );
  };
  
  export default Form;