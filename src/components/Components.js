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
          onChange={(e) => {this.setState({message: e.target.value})}} 
        />
      </div>
    );
  }
}

export default Components;