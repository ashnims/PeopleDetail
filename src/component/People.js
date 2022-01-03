import React, { useState } from "react";
import Details from "./Details";
import {
  Paragh,
  User,
  AllUsers,
  ALLUserContainer,
  Name,
  Email,
} from "./PeopleStyle";

const People = ({ allusers }) => {
  const [detail, setDetail] = useState();

  return (
    <div>
      <User>{detail && <Details user={detail} />}</User>
      <AllUsers>
        {allusers.map((user, index) => {
          const { name, gender, nat, email } = user;
          return (
            <ALLUserContainer onClick={() => setDetail(user)} key={index}>
              <Paragh>
                {gender} - {nat}
              </Paragh>
              <Name>
                {name.title}.<span>{name.first}</span>
                <span> {name.last}</span>
              </Name>
              <Email>{email}</Email>
            </ALLUserContainer>
          );
        })}
      </AllUsers>
    </div>
  );
};

export default People;
