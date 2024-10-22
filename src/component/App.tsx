import { useState } from "react";
import Grid from "./Grid";
import Form, { OnGridFormSubmit } from "./Form";
import styled from "styled-components";

interface GridState {
  lines: number;
  columns: number;
}

export default function App() {
  const [grid, setGrid] = useState<GridState>({
    lines: 1,
    columns: 1,
  });

  const handleChange = (data: OnGridFormSubmit) => {
    setGrid({ ...data });
  };

  return (
    <Container>
      <Grid rows={grid.lines} cells={grid.columns} />
      <Form onSubmit={handleChange} />
    </Container>
  );
}

const Container = styled.div`
  background: #cacaca;
  min-height: 100vh;
`;
