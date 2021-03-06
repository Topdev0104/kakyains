import styled from "styled-components";
import { injectGlobal } from "styled-components";
import horizonFont from "../../assets/fonts/Horizon.ttf";
injectGlobal`
  @font-face {
    font-family: 'horizon';
    src: url(${horizonFont});
    font-weight: normal;
    font-style: normal;
  }
  `;

////////////////////////////////////////////////////
export const StyledHeader = styled.div`
  display: flex;
  transition: all 0.45s;
  flex-direction: column;
  background: ${(props) => props.background || "none"};
  background-size: cover;
  width: 100%;
  align-items: center;
  justify-content: center;

  position: relative;
  .header-text {
    font-family: "horizon";
  }
  .space-img {
  }
  .header_view {
    max-width: 1250px;
  }
  @media screen and (max-width: 1300px) {
    .header_view {
      max-width: 1100px;
    }
  }
  @media screen and (max-width: 1150px) {
    .header_view {
      max-width: 1000px;
    }
  }
  @media screen and (max-width: 1000px) {
    .header_view {
      max-width: 850px;
    }
  }
  @media screen and (max-width: 850px) {
    .header_view {
      max-width: 700px;
    }
  }
  .date-selector {
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
  }
  .react-datepicker-wrapper {
    width: auto;
  }
  .react-datepicker-popper {
    z-index: 3;
  }
  .react-datepicker-ignore-onclickoutside {
    padding: 10px;
    outline: none;
    font-weight: bold;
  }
  .appt-time {
    width: 200px;
    border: none;
    outline: none;
    padding: 8px 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
  }
  .rc-time-picker-input {
    font-weight: bold;

    height: 38px;
  }
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`; ////////////////////////////////////////////////////
export const OverviewSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .dotborder {
    border-top: 4px dotted !important;
    width: 90%;
    border-color: white !important;
  }
  @media screen and (max-width: 850px) {
    .overview_header {
      font-size: 35px;
      text-align: center;
      padding: 0 10px;
    }
    .describe_header {
      width: 100%;
      font-size: 23px;
      text-align: center;
    }
    .overview_container {
      flex-direction: column;
      align-items: center;
    }
    .overview_description {
      padding: 0;
      margin-bottom: 20px;
      font-size: 19px;
    }
  }
`;

////////////////////////////////////////////////////
export const DigitalView = styled.div`
  width: 100%;
  display: flex;
  margin: 50px 0 50px 0;

  justify-content: center;
  .dotborder {
    border-top: 4px dotted !important;
    width: 90%;
    border-color: white !important;
  }
  @media screen and (max-width: 850px) {
    .digital_container {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  @media screen and (max-width: 600px) {
    .digital_header {
      font-size: 35px;
    }
  }
`;
////////////////////////////////////////////////////
export const StyledRoadmap = styled.div`
  width: 100%;
  .dotborder {
    border-top: 4px dotted !important;
    width: 90%;
    border-color: white !important;
  }
  @media screen and (max-width: 850px) {
    .roadmap_header {
      font-size: 35px;
    }
  }
`;
////////////////////////////////////////////////////
export const StyledTeam = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  align-items: center;
  .dotborder {
    border-top: 4px dotted !important;
    width: 90%;
    border-color: white !important;
  }
  @media screen and (max-width: 850px) {
    .team_header {
      font-size: 35px;
    }
  }
  @media screen and (max-width: 750px) {
    .team_grid {
      grid-template: repeat(2, 1fr) / repeat(2, 1fr) !important;
    }
  }
  @media screen and (max-width: 500px) {
    .team_grid {
      gap: 50px !important;
      grid-template: repeat(4, 1fr) / repeat(1, 1fr) !important;
    }
  }
`;
