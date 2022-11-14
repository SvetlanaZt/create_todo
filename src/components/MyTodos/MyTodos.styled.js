import styled from 'styled-components';

export const StyledDiv = styled.div`
  padding-right: 18px;
  padding-left: 18px;
  padding-top: 38px;
  background: #ededed;
  border-radius: 6px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;
export const Styledh2 = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  margin: 0;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
export const StyledUl = styled.ul`
list-style: none;
padding: 0;
  }
`;
export const StyledLi = styled.li`
position: relative;
background: #FFFFFF;
border-radius: 4px;
padding-top: 28px;
padding-bottom: 28px;
padding-left: 24px;
margin-bottom: 4px;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #000000;
  }
`;
export const StyledDivWraper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;
export const StyledInput = styled.input`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 60px;
height: 60px;
-webkit-appearance:none ;
  }
`;
export const StyledDivInput = styled.div`
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
  width: 66px;
  height: 33px;
  outline: none;
  border-radius: 20px;
  background: ${itemBoole =>
    itemBoole.itemBoole ? 'rgba(0, 179, 219, 0.12)' : '#ECECEC;'};
  ::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    top: 1px;
    left: ${itemBoole => (itemBoole.itemBoole ? '50%' : '0')};
    background: #00b3db;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
