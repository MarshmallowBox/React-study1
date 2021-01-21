import React, {useEffect, useState} from 'react';
import Search from 'react-search';
import ReactDom from 'react-dom';
const Iteration = () => {
  
  const [names, setNames] = useState([
    {id: 1, text: '눈사람'},
    {id: 2, text:'얼음'},
    {id: 3, text:'눈'},
    {id: 4, text:'바람'},
  ]);
  const items = [
    { id: 0, value: 'ruby' },
    { id: 1, value: 'javascript' },
    { id: 2, value: 'lua' },
    { id: 3, value: 'go' },
    { id: 4, value: 'julia' }
  ]
  const [searchItem, setSearchItem] = useState('')
  const [inputText, setInputText] = useState('');
  //새로운 항목을 추가할 때 사용할 ID
  const [nextId, setNextId] = useState(5);
  const onChange = e => setInputText(e.target.value);
  const searchChange = e => {
    setSearchItem(e.target.value);
  }
  const onClick = () => {
    // const nextNames = names.concat({
    //   id:nextId,
    //   text:inputText
    // });
    //setNames(nextNames);
    const nextNames = {
      id:nextId,
      text:inputText
    };
    setNames([...names,nextNames]);
    setNextId(nextId+1);
    setInputText('');
    
  }

  const namesList = names.map(
    name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
  );

  useEffect(() => {
    console.log(...names);
  }, [names]);

  const onRemove = id =>{
    const nextNames = names.filter(name => name.id !==id);
    setNames(nextNames);
  }


  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      {/* <input value={searchItem} onChange={searchChange} /> */}
      <Search items={items}
        placeholder='Pick your language'
        maxSelected={3}
        multiple={true}
      />
      <ul>{namesList}</ul>
    </>
  );
};

export default Iteration;