import styled from "styled-components";

const Cell = styled.div.attrs({
  role: "cell",
})`
  flex: 1;
  background: #6c9ce4;
  border: solid 2px white;
`;

export default Cell;
