
- `React`에선 `prop-types` 통해서 `props`가 받은 데이터가 유효한 지를 검증할 수 있다.
- 다만 경고 표시를 브라우저의 Console에 표시한다.
- 코드 실행 전에 오류를 확인할 수 없고, 실행한 후에 확인할 수 있다는 것이다.
- `TypeScript` 사용하면 코드가 실행되기 전에 오류를 확인할 수 있다.

---

## TypeScript 활용해서 prop check

- React Project에서 `TypeScript` 사용하면
- Component의 `props`에 유효하지 않는 데이터를 전송하는 등의 실수를 하면 <br/>
	이를 프로젝트 실행하기 전에 알려준다.
- 예를 들어서 `Circle`이라는 Component가 존재한다고 가정해보자.
- 해당 Component는 `bgColor`라는 `props`가 반드시 필요하다.

``` tsx

```
