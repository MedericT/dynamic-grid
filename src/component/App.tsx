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
      <Grid lines={grid.lines} columns={grid.columns} />
      <Form onSubmit={handleChange} />
    </Container>
  );
}

const Container = styled.div`
  min-block-size: 100svh;
  padding-block: 2em;
  background: #cacaca;
`;
