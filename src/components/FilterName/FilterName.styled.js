import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  border: none;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 27px;
  box-sizing: border-box;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.5);
  @media (min-width: 768px) {
    width: 40%;
  }
`;
