import styled from "styled-components";
import Row from "./Row";

interface GridProps {
  rows: number;
  cells: number;
}

export default function Grid({ rows, cells }: GridProps) {
  return (
    <Container>
      <div>
        {Array.from(Array(rows), (_, i) => {
          return <Row key={i} rows={rows} cells={cells} />;
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;
