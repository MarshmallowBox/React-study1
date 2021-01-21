//함수를 미리 만들어 전달하는 방법
//이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
import React, { Component } from "react";

class ComponentsClass extends Component {
  state = {
    username: '',
    message: ''
  }

//생성자 (바인딩함수) handle을 화살표 함수로 사용하여 삭제가능
// constructor(props) {
//   super(props);
//   this.handleChange = this.handleChange.bind(this);
//   this.handleClick = this.handleClick.bind(this);
// }

//객체안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가
//가리키는 실제 값이 key값으로 사용된다.
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleClick = () => {
  alert(this.state.username + ' : ' + this.state.message);
  this.setState({
    username:'',
    message: ''
  });
}

render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default ComponentsClass;