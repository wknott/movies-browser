import React from "react"
import Prev from "./images/Prev.svg"
import DisabledPrev from "./images/DisabledPrev.svg"
import Next from "./images/Next.svg"
import DisabledNext from "./images/DisabledNext.svg"
import { PagerButton, PagerNext, PagerPrev, PagerText, PagerInfo, PagerWrapper, Bold } from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, incrementPage, decrementPage, selectAllPages, setPageToFirst, setPageToLast } from "../../features/movies/moviesSlice";
import { theme } from "../../theme";

export const Pager = () => {

    const currentPage = useSelector(selectCurrentPage);
    const allPages = useSelector(selectAllPages);
    const mobileWidth = theme.breakpoint.mobileMax;
    const disablePrevious = currentPage === 1 ? true : false;
    const disableNext = currentPage === allPages ? true : false;
    const dispatch = useDispatch();

    return (
        <PagerWrapper>
            <PagerButton
                onClick={() => { dispatch(setPageToFirst()) }}
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
                onClick={() => { dispatch(decrementPage()) }}
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
                onClick={() => { dispatch(incrementPage()) }}
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
                onClick={() => { dispatch(setPageToLast()) }}
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