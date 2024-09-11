import Header from "./components/Header/Header";
import Container from "./components/Main/Container";
import { LeftSide } from "./components/Main/LeftSide";
import { RightSide } from "./components/Main/RightSide";

function App() {
  
  return (
    <>
      <Header/>
      <Container>
        <section>
          <LeftSide/>
        </section>
        <section>
          <RightSide/>
        </section>
      </Container>
    </>
  )
}

export default App
