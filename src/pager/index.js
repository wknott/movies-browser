import React from "react"
import Prev from "./images/Prev.svg"
import Next from "./images/Next.svg"
import { PagerButton, PagerNext, PagerPrev, PagerText,PagerInfo,PagerWrapper, Bold } from "./styled"
import {useDispatch, useSelector} from "react-redux";
import { selectCurrentPage, incrementPage,decrementPage, selectAllPages, setPageToFirst, setPageToLast } from "../features/movies/moviesSlice";
export const Pager = () => {

    const currentPage = useSelector(selectCurrentPage);
    const allPages = useSelector(selectAllPages);
    const mobileWidth = ({theme}) => theme.breakpoint.mobileMax;
    const dispatch = useDispatch();

    return (
        <PagerWrapper>
            <PagerButton
            onClick={() => {dispatch(setPageToFirst())}}
            disabled={currentPage === 1 ? true : false}
            >
                <PagerPrev  src={Prev}/>
                {window.innerWidth > mobileWidth ? 
                <PagerText>
                    First
                </PagerText>
                : <PagerPrev src={Prev}/>}
                
            </PagerButton>

            <PagerButton
            onClick={() => {dispatch(decrementPage())}}
            disabled={currentPage === 1 ? true : false}
            >
                <PagerPrev src={Prev}/>
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
            onClick={() => {dispatch(incrementPage())}}
            disabled={currentPage === allPages ? true : false}
            >
                {window.innerWidth > mobileWidth ? 
                <PagerText>
                   Next
                </PagerText>
                : <></>}
                <PagerNext src={Next}/>
            </PagerButton>

            <PagerButton
            onClick={() => {dispatch(setPageToLast())}}
            disabled={currentPage === allPages ? true : false}
            >
                {window.innerWidth > mobileWidth ? 
                <PagerText>
                   Last
                </PagerText>
                : <PagerNext src={Next}/>}
                <PagerNext src={Next}/>
            </PagerButton>
        </PagerWrapper>)
}