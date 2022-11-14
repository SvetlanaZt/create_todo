import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 56px;
  background-color: #00b3db;
`;
export const StyledDivContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 38px;
  @media (min-width: 768px) {
    padding-top: 52px;
    padding-right: 60px;
    padding-left: 60px;
  }
`;
export const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
  margin: 0;
  margin-left: 5px;
  margin-bottom: 30px;
`;
export const StyledDivWraper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`;
// export const StyledDivFooter = styled.div`
// background: linear-gradient(0deg, #EDEDED 0%, rgba(237, 237, 237, 0) 164.04%);
// height: 57px;
// position: absolute;
//   }
// `;
