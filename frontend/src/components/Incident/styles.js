import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  p + strong {
    margin-top: 32px;
  }

  p {
    color: ${props => props.theme.colors.incidentText};
  }
`;

export const Delete = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;

  :hover {
    opacity: 0.8;
  }
`;

export const Title = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;
`;
