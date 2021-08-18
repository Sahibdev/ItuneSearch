import styled, { css } from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  min-height: 20px;
  border-radius: 5px;
  width: 310px;
`;

export const StyledSongli = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  &:hover {
    background: #e6e6e6;
  }
`;

export const StyledSongDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDetailsDiv = styled.p`
  margin: 0;
  padding: 5px 10px;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 15px;
  max-width: 650px;
`;

export const StyledLabel = styled.span`
  font-weight: 700;
`;

export const StyledErrorLabel = styled.span`
  padding: 50px;
  font-weight: 700;
  font-size: 16px;
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  padding-left: 5px;
`;
