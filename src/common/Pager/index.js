import React from "react"
import Prev from "./images/Prev.svg"
import DisabledPrev from "./images/DisabledPrev.svg"
import Next from "./images/Next.svg"
import DisabledNext from "./images/DisabledNext.svg"
import { PagerButton, PagerNext, PagerPrev, PagerText, PagerInfo, PagerWrapper, Bold } from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentMoviesPage, incrementMoviesPage, decrementMoviesPage, selectAllMoviesPages, setMoviesPageToFirst, setMoviesPageToLast } from "../../features/movies/moviesSlice";
import { theme } from "../../theme";
import {useLocation} from "react-router-dom";
import { selectCurrentPeoplePage, selectPeopleAllPages, incrementPeoplePage, decrementPeoplePage, setPeoplePageToFirst, setPeoplePageToLast } from "../../features/people/peopleSlice"

export const Pager = () => {
    const mobileWidth = theme.breakpoint.mobileMax;
    const location = useLocation();
    const atMovies = location.pathname.includes("movies") ? true : false;

    const currentMoviesPage = useSelector(selectCurrentMoviesPage);
    const allMoviesPages = useSelector(selectAllMoviesPages);
    const currentPeoplePage = useSelector(selectCurrentPeoplePage);
    const allPeoplePages = useSelector(selectPeopleAllPages);

    const currentPage = atMovies ? currentMoviesPage : currentPeoplePage;
    const allPages = atMovies ? allMoviesPages : allPeoplePages;


    const disablePrevious = atMovies ? (currentMoviesPage === 1 ? true : false) : (currentPeoplePage === 1 ? true : false);
    const disableNext = atMovies ? (currentMoviesPage === allMoviesPages ? true : false) : (currentPeoplePage === allPeoplePages ? true : false);
    const dispatch = useDispatch();

    return (
        <PagerWrapper>
            <PagerButton
                onClick={() => { dispatch( atMovies ? setMoviesPageToFirst() : setPeoplePageToFirst()) }}
                disabled={disablePrevious}
            >
                <PagerPrev src={disablePrevious ? DisabledPrev : Prev} />
                {window.innerWidth > mobileWidth ?
                    <PagerText>
                        First
                </PagerText>
                    : <PagerPrev src={disablePrevious ? DisabledPrev : Prev} />
                }

            </PagerButton>

            <PagerButton
                onClick={() => { dispatch( atMovies ? decrementMoviesPage() : decrementPeoplePage() ) }}
                disabled={disablePrevious}
            >
                <PagerPrev src={disablePrevious ? DisabledPrev : Prev} />
                {window.innerWidth > mobileWidth ?
                    <PagerText>
                        Previous
                </PagerText>
                    : <></>}
            </PagerButton>

            <PagerInfo>
                Page<Bold> {currentPage} </Bold>
                of<Bold> {allPages} </Bold>
            </PagerInfo>

            <PagerButton
                onClick={() => { dispatch( atMovies ? incrementMoviesPage() : incrementPeoplePage()) }}
                disabled={disableNext}
            >
                {window.innerWidth > mobileWidth ?
                    <PagerText>
                        Next
                </PagerText>
                    : <></>}
                <PagerNext src={disableNext ? DisabledNext : Next} />
            </PagerButton>

            <PagerButton
                onClick={() => { dispatch( atMovies ? setMoviesPageToLast() : setPeoplePageToLast()) }}
                disabled={disableNext}
            >
                {window.innerWidth > mobileWidth ?
                    <PagerText>
                        Last
                </PagerText>
                    : <PagerNext src={disableNext ? DisabledNext : Next} />
                }
                <PagerNext src={disableNext ? DisabledNext : Next} />
            </PagerButton>
        </PagerWrapper>)
}