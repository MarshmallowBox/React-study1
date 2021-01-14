import React from "react";
const DataUse = props => {
  //객체 다루기
  const object = {a:1, b:2, c:3};
  const nextObject = {...object, b:2};


  //배열 다루기
  const array =[
    {id:1, value:true},
    {id:2, value:true},
    {id:3, value:false}
  ];
  //데이터 추가
  let nextArray = array.concat({id:4});
  //id가 2인 항목 제거
  nextArray.filter(item => item.id !==2);
  //id가 1인 항목의 value를 false로 변경
  nextArray.map(item => (item.id===1 ? {...item, value:false} : item));
  
  return (
    <>
    </>
  );
};
export default DataUse;