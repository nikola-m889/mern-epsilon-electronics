import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: var(--bg-secondary);
  color: var(--bg-primary);
  padding: 10px 20px;
  transition: var(--mainTransition);
  font-size: 14px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background: ${(props) =>
      props.btnBuy ? "var(--bg-primary)" : "var(--text-light)"};
    color: ${(props) =>
      props.btnBuy ? "var(--bg-secondary)" : "var(--bg-primary)"};
    font-size: 14px;
  }
  &:focus {
    outline: none;
  }
`;
