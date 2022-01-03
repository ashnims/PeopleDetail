import styled from "styled-components";

export const UserContainer = styled.div`
  background-color: rgb(63, 55, 180);
  border-radius: 5px;
  padding: 10px;
  line-height: 20px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.3);
  width: 750px;
  height: 250px;
  position: absolute;
  top: 180px;
  left: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 550px;
    height: 220px;
    left: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 180px;
    left: 180px;
    padding: 12px;
  }
  @media screen and (max-width: 500px) {
    width: 280px;
    height: 150px;
    left: 100px;
    top: 100px;
  }
`;
export const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  left: 40px;
  top: 70px;
  @media screen and (max-width: 1024px) {
    width: 100px;
    left: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 80px;
    left: 20px;
  }
  @media screen and (max-width: 500px) {
    width: 60px;
    left: 15px;
    top: 60px;
  }
`;
export const UserDetail = styled.div`
  text-align: center;
  position: absolute;
  left: 200px;
  text-align: left;
  @media screen and (max-width: 1024px) {
    left: 140px;
  }
  @media screen and (max-width: 768px) {
    left: 120px;
  }
  @media screen and (max-width: 500px) {
    left: 90px;
  }
`;

export const Title = styled.p`
  font-size: 40px;
  margin: 5px;
  line-height: 50px;
  font-weight: bold;
  color: rgb(48, 133, 245);
  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 18px;
  }
`;
export const Address = styled.p`
  line-height: 15px;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
    line-height: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
    line-height: 8px;
  }
`;
export const Gender = styled.p`
  line-height: 15px;
  color: rgb(150, 150, 150);

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    line-height: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 10px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
    line-height: 8px;
  }
`;
