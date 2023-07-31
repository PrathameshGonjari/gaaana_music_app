import styled from "styled-components";

export const LoaderWrapper = styled.div<{
  isloading: number;
}>`
  display: ${({ isloading }) => (isloading ? "block" : "none")};
`;
