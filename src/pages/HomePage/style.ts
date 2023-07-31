import styled from "styled-components";

export const LoaderWrapper = styled.div<{
  loading: boolean;
}>`
  display: ${(props) => (props.loading ? "block" : "none")};
`;
