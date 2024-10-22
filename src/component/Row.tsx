import styled from "styled-components";
import Cell from "./Cell";

interface RowProps {
  rows: number;
  cells: number;
}

export default function Row({ cells, rows }: RowProps) {
  return (
    <SRow rows={rows}>
      {Array.from(Array(cells), (_, i) => {
        return <Cell key={i} />;
      })}
    </SRow>
  );
}

const SRow = styled.div<{ rows: number }>`
  display: flex;
  width: 400px;
  height: ${(props) => 400 / props.rows}px;
`;
