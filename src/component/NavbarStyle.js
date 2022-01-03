import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.h1`
  &:hover {
    color: rgb(253, 59, 59);
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
export const NavContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;
export const List = styled.li`
  padding: 0px 10px;

  @media screen and (max-width: 768px) {
    padding: 0px 8px;
  }
  @media screen and (max-width: 500px) {
    padding: 0px 5px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  opacity: 0.9;

  &:hover {
    border-bottom: 2px solid orangered;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
