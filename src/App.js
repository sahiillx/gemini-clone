import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
}

export default App;
