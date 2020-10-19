import React, { useEffect } from "react"
import Prev from "./images/Prev.svg"
import DisabledPrev from "./images/DisabledPrev.svg"
import Next from "./images/Next.svg"
import DisabledNext from "./images/DisabledNext.svg"
import {
  PagerButton,
  PagerNext,
  PagerPrev,
  PagerText,
  PagerInfo,
  PagerWrapper,
  Bold,
  MobilePagerPrev,
  MobilePagerNext
} from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { selectAllMoviesPages, setMoviesPage } from "../../features/movies/moviesSlice";
import { selectPeopleAllPages, setPeoplePage } from "../../features/people/peopleSlice";
import { useLocation } from "react-router-dom";
import { useQueryParameter, useReplaceQueryParameter } from "../../features/search/queryParameters";
import pageParam from "../../features/pageQueryParamName";

export const Pager = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const atMovies = location.pathname.includes("movies") ? true : false;
  const currentPage = +useQueryParameter(pageParam) || 1;
  const allMoviesPages = useSelector(selectAllMoviesPages);
  const allPeoplePages = useSelector(selectPeopleAllPages);
  const allPages = atMovies ? allMoviesPages : allPeoplePages;
  const replaceQueryParam = useReplaceQueryParameter();
  const disableNext = currentPage === allPages;
  const disablePrevious = currentPage === 1;

  useEffect(() => {
    dispatch(atMovies ? setMoviesPage(currentPage) : setPeoplePage(currentPage));
  }, [currentPage, dispatch, atMovies])

  const onFirstButtonClick = () => {
    replaceQueryParam({ key: pageParam, value: 1 })
  }
  const onPreviousButtonClick = () => {
    replaceQueryParam({ key: pageParam, value: +currentPage - 1 });
  }
  const onNextButtonClick = () => {
    replaceQueryParam({ key: pageParam, value: +currentPage + 1 });
  }
  const onLastButtonClick = () => {
    replaceQueryParam({ key: pageParam, value: allPages });
  }

  return (
    <PagerWrapper>
      <PagerButton
        onClick={onFirstButtonClick}
        disabled={disablePrevious}
      >
        <PagerPrev src={disablePrevious ? DisabledPrev : Prev} />
        <PagerText>First</PagerText>
        <MobilePagerPrev src={disablePrevious ? DisabledPrev : Prev} />
      </PagerButton>
      <PagerButton
        onClick={onPreviousButtonClick}
        disabled={disablePrevious}
      >
        <PagerPrev src={disablePrevious ? DisabledPrev : Prev} />
        <PagerText>Previous</PagerText>
      </PagerButton>
      <PagerInfo>
        Page<Bold> {currentPage} </Bold>
        of<Bold> {allPages} </Bold>
      </PagerInfo>
      <PagerButton
        onClick={onNextButtonClick}
        disabled={disableNext}
      >
        <PagerText>Next</PagerText>
        <PagerNext src={disableNext ? DisabledNext : Next} />
      </PagerButton>
      <PagerButton
        onClick={onLastButtonClick}
        disabled={disableNext}
      >
        <PagerText>Last</PagerText>
        <MobilePagerNext src={disableNext ? DisabledNext : Next} />
        <PagerNext src={disableNext ? DisabledNext : Next} />
      </PagerButton>
    </PagerWrapper>)
}