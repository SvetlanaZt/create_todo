import styled from 'styled-components';

export const StyledDiv = styled.div`
  background: #ededed;
  border-radius: 6px;
  padding: 26px 23px;
  margin-bottom: 6px;
  @media (min-width: 768px) {
    height: 157px;
    width: 85%;
    margin-right: 33px;
  }
`;
export const StyledH2 = styled.h2`
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #000000;
margin: 0;
margin-bottom: 27px;
  }
`;
export const StyledForm = styled.form`
display: flex;
position: relative;
  }
`;
export const StyledInput = styled.input`
width: 100%;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: rgba(0, 0, 0, 0.5);
background: #FFFFFF;
border-radius: 5px;
padding-top: 18px;
padding-bottom: 18px;
padding-left: 17px;
border: none;
box-sizing: border-box;
  }
`;
export const StyledButton = styled.button`
background: #00B3DB;
border-radius: 5px;
width: 46px;
height: 41px;
border: none;
position: absolute;
top: .5em;
right: .4em;
color: #FFFFFF;
  }
`;
