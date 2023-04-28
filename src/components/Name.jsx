import React, { useState } from "react";

const Name = () => {
<<<<<<< HEAD
  // 이곳에 useState 구문을 작성해주세요
  const [myName, setMyName] = useState("");
  const [myNickName, setmyNickName] = useState("");

  const handleName = (e) => {
    // 이곳에 이름을 설정하도록 하는 코드를 작성해주세요
    setMyName(e.target.value);
  };

  const handleNickName = (e) => {
    // 이곳에 닉네임을 설정하도록 하는 코드를 작성해주세요
    setmyNickName(e.target.value);
=======
  const [myName, setMyName] = useState(""); // 이름이 바뀔 때마다 저장해주는 state
  const [nickName, setNickname] = useState(""); // 닉네임이 바뀔 때마다 저장해주는 state

  const handleName = (e) => {
    setMyName(e.target.value); // 입력된 값을 상태 변화 함수 setMyName 을 통해 myName 에 저장해준다.
  };

  const handleNickName = (e) => {
    setNickname(e.target.value); // 입력된 값을 상태 변화 함수 setNickName 을 통해 nickName 에 저장해준다.
>>>>>>> 249771e6c314ca2061f8c21b845f723b0da15ee9
  };

  return (
    <div className="name">
<<<<<<< HEAD
      <input
        name="myName"
        placeholder="이름을 입력해주세요"
        onChange={handleName}
      />
      <input
        name="nickName"
        placeholder="닉네임을 입력해주세요"
        onChange={handleNickName}
      />
      <p>이름: {myName === "" ? "아직 이름이 업습니다." : myName}</p>
      <p>
        닉네임:
        {myNickName === "" ? "닉네임이 없습니다" : myNickName}
      </p>
=======
      {/* 각 input 태그에 onChange 이벤트 핸들러를 부여해서, 값이 변경될 때마다 각 함수를 실행시키도록 함 */}
      <input name="myName" value={myName} placeholder="이름을 입력해주세요" onChange={handleName} />
      <input name="nickName" value={myName} placeholder="닉네임을 입력해주세요" onChange={handleNickName} />

      {/* 이름/닉네임이 입력되지 않으면 "아직 이름/닉네임이 없습니다"를, 입력되었으면 입력한 값이 출력되도록 삼항연산자를 사용함 */}
      <p>이름: {myName === "" ? "아직 이름이 없습니다." : myName}</p>
      <p>닉네임: {nickName === "" ? "아직 닉네임이 없습니다." : nickName}</p>
>>>>>>> 249771e6c314ca2061f8c21b845f723b0da15ee9
    </div>
  );
};

export default Name;
