import styled from "styled-components";

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AllUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);

  align-items: left;
  position: relative;
  top: 500px;
  overflow-x: hidden;

  @media screen and (max-width: 1024px) {
    top: 400px;
  }

  @media screen and (max-width: 500px) {
    top: 300px;
  }
`;
export const ALLUserContainer = styled.div`
  margin: 10px;
  background-color: rgb(108, 186, 238);
  border-radius: 5px;
  padding: 12px 16px;
  line-height: 32px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
  height: 110px;

  &:hover {
    background-color: rgb(81, 152, 219);

    color: white;
  }
  @media screen and (max-width: 1024px) {
    line-height: 22px;
    height: 90px;
    padding: 12px 12px;
  }
  @media screen and (max-width: 768px) {
    line-height: 18px;
    height: 75px;
    padding: 12px 8px;
  }
  @media screen and (max-width: 500px) {
    line-height: 12px;

    height: 50px;
    padding: 10px 5px;
    margin: 5px;
  }
`;
export const Paragh = styled.p`
  font-size: 18px;
  opacity: 0.9;
  margin: 0px;
  color: rgb(214, 231, 236);

  &:hover {
    color: rgb(179, 182, 184);
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 7px;
  }
`;
export const Name = styled.h1`
  margin: 5px 0px;
  font-size: 20px;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 9px;
  }
`;
export const Email = styled.p`
  font-size: 18px;
  opacity: 0.9;
  margin: 0px;
  color: rgb(63, 55, 180);

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 7px;
  }
`;
