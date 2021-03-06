//Class형 컴포넌트이다!
import React, { Component } from "react";
class Components extends Component {
  state = {
    message: ''
  }

render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input 
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={
            (e) => {this.setState({message: e.target.value})}
          } 
        />
        <button onClick={
          (e) => {
            alert(this.state.message);
            this.setState({message: ""});
            console.log(this.state.message);
          }
        }>확인</button>
      </div>
    );
  }
}

export default Components;