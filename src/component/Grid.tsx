import styled from "styled-components";

interface GridProps {
  lines: number;
  columns: number;
}

export default function Grid({ lines, columns }: GridProps) {
  return (
    <SGrid columns={columns}>
        {Array.from(Array(lines * columns), (_, i) => {
          return <div key={i} role="cell"></div>;
        })}
    </SGrid>
  );
}

const SGrid = styled.div<{columns: number}>`
  min-block-size: 50vmin;
  inline-size: 50vmin;
  margin: auto;
  background-color: #6c9ce4;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  & > * {
    border: solid 2px white;
  }
`;