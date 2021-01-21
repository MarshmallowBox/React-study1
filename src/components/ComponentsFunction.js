import React, {useState}from 'react';
const ComponentsFunction = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value // 원하는 값을 덮어 씌우기
    };
    console.log(nextForm);
    setForm(nextForm);
  };
  const onClick = () =>{
    alert(username + " : " + message);
    setForm({
      username:'',
      message:''
    });
  }
  const onKeyPress = e =>{
    if(e.key==='Enter'){
      onClick();
    }
  }
  return (
    <>
      <input 
        type="text"
        name="username"
        placeholder="아무거나 입력하세요"
        value={username}
        onChange={onChange}
      ></input>
      <input 
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick = {onClick}>확인</button>
    </>
  )
}
export default ComponentsFunction;