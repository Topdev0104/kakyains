import styled from "styled-components";
import { injectGlobal } from "styled-components";
import { theme } from "../../theme";
import horizonFont from "../../assets/fonts/Horizon.ttf";
injectGlobal`
  @font-face {
    font-family: 'horizon';
    src: url(${horizonFont});
    font-weight: normal;
    font-style: normal;
  }
  `;
export const Text = styled.span`
  transition: 0.3s ease-in-out;
  flex: ${(props) => props.flex || "auto"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-family: ${(props) => props.fontFamily || "Montserrat"};
  font-weight: ${(props) => props.fontWeight || "0"};
  line-height: ${(props) => props.lineHeight || "auto"};
  color: ${(props) => props.color || theme.white};
  position: ${(props) => props.position || "relative"};
  max-width: ${(props) => props.maxWidth || "auto"};
  text-align: ${(props) => props.align || "left"};
  white-space: ${(props) => props.whiteSpace || "none"};
  text-overflow: ${(props) => props.textOverflow || "none"};
  overflow: ${(props) => props.overflow || "none"};
  opacity: ${(props) => props.opacity || "1"};
  background: ${(props) => props.background || "none"};
  cursor: ${(props) => props.cursor || "unset"};
  z-index: ${(props) => props.zIndex || 0} !important;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.rotate || "rotate(0)"};
  word-break: ${(props) => (props.wordBreak ? props.wordBreak : "break-word")};
`;
