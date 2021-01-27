import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const ReducerCounter2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
    newname: ""
  });
  const { name, nickname, newname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
        <input name="newname" value={newname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
        <div>
          <b>new네임: </b>
          {newname}
        </div>
      </div>
    </div>
  );
};

export default ReducerCounter2;
