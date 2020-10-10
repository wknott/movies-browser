import React from "react";
import {
  Text,
  MobilePersonBiography,
  DesktopPersonBiography,
  DesktopGrayText,
  MobileGrayText,
  GrayText,
  PersonBirthContainer,
  DetailsContainer,
  StyledPersonDetailsTile,
  PersonImage,
  PersonInfo,
  PersonName
} from "./styled";

const PersonDetailsTile = ({ person }) => (
  <StyledPersonDetailsTile>
    <PersonImage src={`https://image.tmdb.org/t/p/h632${person.profile_path}`} alt="" />
    <PersonInfo>
      <PersonName>{person.name}</PersonName>
      <PersonBirthContainer>
        <DetailsContainer>
          <DesktopGrayText>Date of birth:</DesktopGrayText>
          <MobileGrayText>Birth:</MobileGrayText>
          <Text>{person.birthday.slice(8, 10)}.{person.birthday.slice(5, 7)}.{person.birthday.slice(0, 4)}</Text>
        </DetailsContainer>
        <DetailsContainer>
          <GrayText>Place of birth:</GrayText>
          <Text>{person.place_of_birth}</Text>
        </DetailsContainer>
        <DesktopPersonBiography>{person.biography}</DesktopPersonBiography>
      </PersonBirthContainer>
    </PersonInfo>
    <MobilePersonBiography>{person.biography}</MobilePersonBiography>
  </StyledPersonDetailsTile>
);

export default PersonDetailsTile;