import React from "react";
import Prev from "./images/Prev.svg";
import DisabledPrev from "./images/DisabledPrev.svg";
import Next from "./images/Next.svg";
import DisabledNext from "./images/DisabledNext.svg";
import {
  PagerButton,
  PagerNext,
  PagerPrev,
  PagerText,
  PagerInfo,
  PagerWrapper,
  Bold,
  MobilePagerPrev,
  MobilePagerNext,
} from "./styled";
import { useSelector } from "react-redux";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../features/search/queryParameters";
import pageParam from "../../features/pageQueryParamName";
import { selectLanguage } from "../Navigation/LanguageSelect/languageSlice";
import { first, previous, page, ofPage, next, last } from "../languages";

export const Pager = ({ allPages }) => {
  const currentPage = +useQueryParameter(pageParam) || 1;
  const replaceQueryParam = useReplaceQueryParameter();
  const disableNext = currentPage === allPages;
  const disablePrevious = currentPage === 1;
  const language = useSelector(selectLanguage);

  const onFirstButtonClick = () => {
    replaceQueryParam({ key: pageParam, value: 1 });
  };
  const onPreviousButtonClick = () => {
    replaceQueryParam({ key: pageParam, value: +currentPage - 1 });
  };
  const onNextButtonClick = () => {
    replaceQueryParam({ key: pageParam, value: +currentPage + 1 });
  };
  const onLastButtonClick = () => {
    replaceQueryParam({ key: pageParam, value: allPages });
  };

  return (
    <PagerWrapper>
      <PagerButton onClick={onFirstButtonClick} disabled={disablePrevious}>
        <PagerPrev src={disablePrevious ? DisabledPrev : Prev} />
        <PagerText>{first[language]}</PagerText>
        <MobilePagerPrev src={disablePrevious ? DisabledPrev : Prev} />
      </PagerButton>
      <PagerButton onClick={onPreviousButtonClick} disabled={disablePrevious}>
        <PagerPrev src={disablePrevious ? DisabledPrev : Prev} />
        <PagerText>{previous[language]}</PagerText>
      </PagerButton>
      <PagerInfo>
        {page[language]}
        <Bold> {currentPage} </Bold>
        {ofPage[language]}
        <Bold> {allPages} </Bold>
      </PagerInfo>
      <PagerButton onClick={onNextButtonClick} disabled={disableNext}>
        <PagerText>{next[language]}</PagerText>
        <PagerNext src={disableNext ? DisabledNext : Next} />
      </PagerButton>
      <PagerButton onClick={onLastButtonClick} disabled={disableNext}>
        <PagerText>{last[language]}</PagerText>
        <MobilePagerNext src={disableNext ? DisabledNext : Next} />
        <PagerNext src={disableNext ? DisabledNext : Next} />
      </PagerButton>
    </PagerWrapper>
  );
};
