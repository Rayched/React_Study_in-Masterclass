import { validateHeaderValue } from "http";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [email, setEmail] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: {value},
    } = event;
    //객체의 구조 분해 할당
    /*'event { currentTarget { value: ??, ...}, ...};
      * 위와 같이 생긴 event 객체의 'currentTarget.value'에 접근
      * 'event.currentTarget.value'까지 입력할 필요 없이
      * 간단하게 'value'만 입력해도 접근이 가능해진다.
    */

    setEmail(value);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`로그인 성공, ${email}`);
    setEmail("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={onChange}
        />
        <button>로그인</button>
      </form>
    </div>
  );
}

export default App;