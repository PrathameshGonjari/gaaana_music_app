import { styled } from "styled-components";

interface FlexProps {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexWrap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap || 0}px;
  flex-wrap: ${(props) => props.flexWrap};
`;
