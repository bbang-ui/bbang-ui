import styled from '@emotion/styled';

const handleOuterText = () => {}; // 외부 함수는 화살표 함수만 사용

// 컴포넌트는 함수 선언식 사용
function App() {
  const handleTest = () => {}; // 내부 함수는 화살표 함수만 사용
  return <Wrapper></Wrapper>;
}

export default App; // export default는 컴포넌트 밑에

// emotion 코드는 export default 밑에
const Wrapper = styled.div`
  background-color: transparent;
`;
