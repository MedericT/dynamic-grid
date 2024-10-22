import styled from "styled-components";

interface FormProps {
  onSubmit: (args: OnGridFormSubmit) => void;
}

export interface OnGridFormSubmit {
  lines: number;
  columns: number;
}

export default function Form({ onSubmit }: FormProps) {
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      lines: HTMLInputElement;
      columns: HTMLInputElement;
    };

    onSubmit({
      lines: parseInt(target.lines.value),
      columns: parseInt(target.columns.value),
    });
  };

  return (
    <Container>
      <form onSubmit={handleChange}>
        <InputContainer>
          <label>Columns: </label>
          <input
            name="columns"
            aria-label="columns-input"
            type="number"
            defaultValue="1"
            min="1"
            max="100"
          />
        </InputContainer>
        <InputContainer>
          <label>Lines: </label>
          <input
            name="lines"
            aria-label="lines-input"
            type="number"
            defaultValue="1"
            min="1"
            max="100"
          />
        </InputContainer>
        <SubmitContainer>
          <input type="submit" value="Create" />
        </SubmitContainer>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const InputContainer = styled.span`
  padding: 10px;
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
