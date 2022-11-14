import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
export const StyledP = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  cursor: pointer;
  :hover {
    font-weight: 700;
    color: #00b3db;
  }
`;
