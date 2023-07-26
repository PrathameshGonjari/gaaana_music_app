import { styled } from "styled-components";

interface FlexProps {
  direction?: string;
  justifycontent?: string;
  alignitems?: string;
  gap?: string;
  flexwrap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
  gap: ${(props) => props.gap || 0}px;
  flex-wrap: ${(props) => props.flexwrap};
`;
