import React, { useEffect, useMemo } from "react";
import styled from "styled-components/native";

import { AppView, CharacterList, GenderFavouritesSection, Loader, ScrollViewAppCard, StyledText } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCharacters } from "../store/slices/characters/thunk.ts";
import { clearFavourites } from "../store/slices/favourites/thunk.ts";
import { EFontFamily, FAVOURITES_KEY, IFavourite } from "../types";
import { getDataFromStorage, getScreenWidthWithMargin } from "../utils";

export const HomeScreen = () => {
    const { characters, loading } = useAppSelector((state) => state.characters);
    const { favourites, count } = useAppSelector((state) => state.favourites);
    const dispatch = useAppDispatch();

    const favouritesData = useMemo(() => {
        return [{ title: "Male fans", value: count.male }, { title: "Female fans", value: count.female }, { title: "others", value: count.other }];
    }, [count]);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [dispatch]);

    getDataFromStorage<ReadonlyArray<IFavourite>>(FAVOURITES_KEY).then(data => console.log('fav from async store', data))

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
                        <CharacterList data={characters}/>
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
    background-color: aqua;
    align-items: center;
    justify-content: center;
`;



