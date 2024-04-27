### helper Function `keyframe` 

- `styled-components`에서 animation 효과를 추가하려면
- 먼저 `keyframe`이라는 `helper function`을 Import해야 한다.

``` js
import styled, { keyframes } from "styled-components"
```

- 위와 같이 `keyframes` 함수를 Import 했다면, 아래와 같이 작성해서 사용할 수 있다.

``` jsx
const animation = keyframes`
	from {
	}
	to {
	}
`;
```


``` jsx
const Box = styled.div`
	width: 200px; height: 200px;
	background-color: green;
	animation: ${animation};
`;

```
---

### `animation` 속성


``` css
animation: 3s linear infinite;
```

- `style` 사이에 Animation 효과를 적용하는 CSS 속성


---

### 📔 Reference

- **[CSS / `@keyframes`](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes)**
- **[CSS / animation 속성](https://developer.mozilla.org/ko/docs/Web/CSS/animation)**

