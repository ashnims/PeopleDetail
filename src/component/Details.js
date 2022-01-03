import React from "react";
import { useEffect } from "react";
import {
  UserContainer,
  Image,
  UserDetail,
  Title,
  Address,
  Gender,
} from "./DetailStyle";
import Aos from "aos";
import "aos/dist/aos.css";

const Details = ({ user }) => {
  useEffect(() => {
    Aos.init({ duration: 3000, easing: "ease-in-sine" });
  }, []);
  return (
    <div>
      <UserContainer data-aos="fade-zoom-in" data-aos-delay="1000">
        <div>
          <Image src={user.picture.large} alt="person" />
        </div>
        <UserDetail data-aos="flip-up">
          <Title>
            {user.name.title}.<span>{user.name.first}</span>
            <span> {user.name.last}</span>
          </Title>
          <Address>
            {user.location.street.number},{user.location.street.name}, ,
            {user.location.city}, {user.location.state},{user.location.postcode}
          </Address>
          <Address>
            {user.location.timezone.offset}-{user.location.timezone.description}
            ,{user.location.country}
          </Address>
          <Gender>{user.gender}</Gender>
        </UserDetail>
      </UserContainer>
    </div>
  );
};

export default Details;
