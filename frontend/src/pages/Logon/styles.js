import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
`;

export const Form = styled.form`
  margin-top: 100px;

  a {
    color: ${props => props.theme.colors.text};
  }
`;

export const FormHeader = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;
