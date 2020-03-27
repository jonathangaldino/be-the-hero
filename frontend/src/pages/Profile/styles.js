import styled from "styled-components";
import { Link } from "react-router-dom";
import Switch from "react-switch";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Welcome = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Logo = styled.img`
  height: 64px;
`;

export const StyledLink = styled(Link)`
  width: 260px !important;
  margin-left: auto !important;
  margin-top: 0 !important;
`;

export const StyledSwitch = styled(Switch)`
  margin-left: 16px;
`;

export const Button = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  :hover {
    border-color: #999;
  }
`;
