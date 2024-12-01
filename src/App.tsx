import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { Button } from "./components/Button";
import { Label } from "./components/Label";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };

  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Title>Counter App</Title>
      <Content>
        <Button label="-" onClick={sub} />
        <Label data={counter} />
        <Button label="+" onClick={add} />
      </Content>
    </Container>
  );
}

export default App;
