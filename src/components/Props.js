import React from "react";
import PropTypes from "prop-types";
const Props = ({ name, favoriteNumber, children }) => {
  //비구조화 할당 문법으로 내부값을 바로 추출 가능
  //const {name, children} = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다. <br />
      제일 좋아하는 숫자는{favoriteNumber}입니다.

    </div>
  );
};

//컴포넌트의 기본 props를 지정
Props.defaultProps = {
  name: "기본 이름"
};

//컴포넌트의 필수 props를 지정하거나 props의 타입을 지정
Props.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default Props;
