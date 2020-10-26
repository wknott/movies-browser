import React from "react";
import {
  DetailsTile,
  Image,
  Text,
  Birth,
  MobileDescription,
  DesktopDescription,
  DesktopGrayText,
  MobileGrayText,
  GrayText,
  Frame,
  Name,
  DefaultImageContainer,
  DefaultImage,
} from "./styled";
import profile from "../../../../images/Profile.svg";
import ReadMoreButton from "../../../../common/ReadMoreButton";
import { birth, dateOfBirth, placeOfBirth } from "../../../../languages";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../../common/Navigation/LanguageSelect/languageSlice";

const PersonDetailsTile = ({ person }) => {
  const language = useSelector(selectLanguage);

  return (
    <DetailsTile>
      {person.profile_path ?
        <Image src={`https://image.tmdb.org/t/p/h632${person.profile_path}`} alt="" /> :
        <DefaultImageContainer>
          <DefaultImage src={profile} />
        </DefaultImageContainer>
      }
      <section>
        <Name>{person.name}</Name>
        <Birth>
          {person.birthday &&
            <Frame>
              <DesktopGrayText>{dateOfBirth[language]}:</DesktopGrayText>
              <MobileGrayText>{birth[language]}:</MobileGrayText>
              <Text>{person.birthday.slice(8, 10)}.{person.birthday.slice(5, 7)}.{person.birthday.slice(0, 4)}</Text>
            </Frame>
          }
          {person.place_of_birth &&
            <Frame>
              <GrayText>{placeOfBirth[language]}:</GrayText>
              <Text>{person.place_of_birth}</Text>
            </Frame>
          }
        </Birth>
        <DesktopDescription>
          <ReadMoreButton content={person.biography} />
        </DesktopDescription>
      </section>
      <MobileDescription>
        <ReadMoreButton content={person.biography} />
      </MobileDescription>
    </DetailsTile>
  );
}

export default PersonDetailsTile;