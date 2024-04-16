/**
 * Function : compact
 *
 * [Description]
 * 부모 컴포넌트 -> props.children으로 props를 넘겨줄 때 기존 children props 내용이 아닌
 * 매개변수로 넘겨준 객체로 props를 커스텀 해주는 함수 입니다.
 *
 * [With Function]
 * childrenWithProps
 *
 * @param object
 * @returns object
 */

function compact<T extends Record<any, any>>(object: T) {
  for (let key in object) {
    if (object[key] === undefined) delete object[key];
  }
  return object;
}

export default compact;
