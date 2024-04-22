
### 기존에 `React App`에 `CSS Style` 적용하던 방법

- `Style.css` 파일을 만들고, 그걸 Import하던 방식

``` js
import style from "style.css";
```

- `style prop`에 `JavaScript Object` 형태로 `style` Code 추가하던 방식

``` jsx
function App(){
	return (
		<div style={{backgroundColor: "green", color: "white"}}>
			Hello World
		</div>
	);
}
```

- `CSS Module` 사용하기

---
