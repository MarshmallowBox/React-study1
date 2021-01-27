//useref를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current
//값이 실제 엘리먼트를 가리킨다.
import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  //ref 함수 선언
  const inputEl = useRef(null);
//컴포넌트가 처음 렌더링될 대만 함수 생성
const onChange = useCallback(e => {
    setNumber(e.target.value);
  },[]);

//number 혹은 list가 바뀌었을 때만 함수 생성
const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber('');
  inputEl.current.focus();
},[number, list]);

//list가 변경될 때만 리렌더링을 하게 한다.
const avg = useMemo(() => getAverage(list), [list]);

return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div> 
    </div>
  );
};



export default Average;