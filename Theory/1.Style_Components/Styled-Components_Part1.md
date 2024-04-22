
#### 사전 준비 / `style component` 설치

- `styled-components` 설치 명령어

``` shell
npm install styled-components
npm i styled-components
```

- `styled-components` CSS 자동 완성 기능은 VSCode Extension 설치해서 사용 가능
- **"vscode-styled-components** 👈 VSCode Extension Name
---
#### 예제 코드 (`styled-components` 사용 전)

``` jsx
//Style Component 사용 전
//Style Property 추가해서 React Component에 style 적용

function App(){
	return (
		<div style={{ display: "flex"}}>
			<div style={{ backgroundColor: "red", width: 100, height: 100}}>
				Box 1 
			</div>
			<div style={{ backgroundColor: "blue", width: 100, height: 100}}>
				Box 2
			</div>
		</div>
	);
}
```

- `CSS` File 별도로 Import 하지 않은 형태의 코드
- 다만 `CSS Style`을 `JavaScript` 코드로 작성해야 하므로 <br/>
	다소 불편하고 직관적이지 않은 게 조금 흠이다.
- 그리고 `<div>` 요소가 좀 많이 들어가서 코드의 가독성이 좋지 않게 보인다.
- 이제 `styled-components` 사용해서 위의 예제 코드를 개선해보자.

---
### `styled component` 만들기

- `styled-components` Import한 상태에서 아래와 같이 입력해서 <br/>
	`Styled component` 생성할 수 있다.

``` jsx
import styled from "styled-components";

//const styledCompo = styled.'HTML_Tag_Name'`(Back Tick)`;
const StyledCompo = styled.div`
	/* CSS Code */
`;
```

- 생성할 `Styled Component`의 HTML 요소를 지정한 다음
- 해당 Component의 CSS Code는 `(백틱)` 내부에 작성한다.
- 이후 `App` 함수에서 `Styled Component` 호출 <br/>
	지정해둔 CSS Style이 적용된 React Element가 return된다.

- 이제 이를 앞의 예제 코드에 적용해보자.
---
### 기존 예제 코드에  `styled Component` 적용

``` jsx
import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const Box1 = styled.div`
	background-color: red;
	width: 100px;
	heigth: 100px;
`;

const BoxTwo = styled.div`
  background-color: blue;
  width: 100px; 
  height: 100px;
`;

function App() {
  return (
    <Parents>
	    <BoxOne>Box 1</BoxOne>
	    <BoxTwo>Box 2</BoxTwo>
    </Parents>
  );
}
```

- 기존 코드에서 모든 `<div>` 요소를 `Parents`, `Box 1 / 2` Component 대체한 상태
- 별도로 CSS Style을 수정하지는 않았기 때문에, 결과물은 동일하다.
- 물론 기존 코드에서 모든 `<div>` 요소들을 `styled-components` 대체했기에 <br/>
	코드의 가독성이 좀 더 나아진 느낌을 받을 수 있다.

- 크롬 개발자 Console에서 생성된 Element를 확인해보면 <br/>
	`styled-components`가 각 요소에 임의의 `className` 추가한 것을 확인할 수 있다.
	
![[styled-components가_자동으로_className추가함.png]]

---





