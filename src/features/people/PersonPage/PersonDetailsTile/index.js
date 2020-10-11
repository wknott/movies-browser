import React from "react";
import {
  DetailsTail,
  Image,
  Text,
  Birth,
  MobileDescription,
  DesktopDescription,
  DesktopGrayText,
  MobileGrayText,
  GrayText,
  Frame,
  Name
} from "./styled";

const PersonDetailsTile = ({ person }) => (
  <DetailsTail>
    <Image src={`https://image.tmdb.org/t/p/h632${person.profile_path}`} alt="" />
    <section>
      <Name>{person.name}</Name>
      <Birth>
        <Frame>
          <DesktopGrayText>Date of birth:</DesktopGrayText>
          <MobileGrayText>Birth:</MobileGrayText>
          <Text>{person.birthday.slice(8, 10)}.{person.birthday.slice(5, 7)}.{person.birthday.slice(0, 4)}</Text>
        </Frame>
        <Frame>
          <GrayText>Place of birth:</GrayText>
          <Text>{person.place_of_birth}</Text>
        </Frame>
      </Birth>
      <DesktopDescription>{person.biography}</DesktopDescription>
    </section>
    <MobileDescription>{person.biography}</MobileDescription>
  </DetailsTail>
);

export default PersonDetailsTile;