import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components/native";

import { AppView, CharacterList, GenderFavouritesSection, Loader, ScrollViewAppCard, StyledText } from "../components";
import Pagination from "../components/pagination/pagination.tsx";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCharacters } from "../store/slices/characters/thunk.ts";
import { clearFavourites } from "../store/slices/favourites/thunk.ts";
import { EFontFamily } from "../types";
import { getScreenWidthWithMargin } from "../utils";

const PAGE_SIZE = 10;

export const HomeScreen = () => {
    const {
        characters, loading, count: totalCount
    } = useAppSelector((state) => state.characters);
    const { favourites, count } = useAppSelector((state) => state.favourites);
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        dispatch(fetchCharacters(currentPage));
    }, [currentPage, dispatch]);

    useEffect(() => {
        if (!totalCount) return;

        setTotalPages(Math.ceil(totalCount / PAGE_SIZE));
    }, [totalCount]);

    const favouritesData = useMemo(() => {
        return [{ title: "Male fans", value: count.male }, { title: "Female fans", value: count.female }, { title: "others", value: count.other }];
    }, [count]);

    return (
        <AppView title="Star Wars Favorites" shouldShowLogo={true}>
            {!loading ? (
                <>
                    <ScrollViewAppCard>
                        <GenderFavouritesSection
                            data={favouritesData}
                        />
                        <StyledButton onPress={() => dispatch(clearFavourites())}>
                            <StyledText font={EFontFamily.MONTSERRAT}>Reset</StyledText>
                        </StyledButton>
                        <CharacterList data={characters} favourites={favourites}/>
                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    </ScrollViewAppCard>
                </>
            ) : (
                <Loader/>
            )}
        </AppView>
    );
};

const StyledButton = styled.TouchableOpacity`
    border-radius: 10px;
    margin-bottom: 10px;
    height: 40px;
    width: ${getScreenWidthWithMargin()}px;
    background-color: #d0e864;
    align-items: center;
    justify-content: center;
`;



