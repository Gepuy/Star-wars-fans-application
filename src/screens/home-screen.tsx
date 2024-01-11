import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { AppView, Loader } from "../components";
import { getCharactersData } from "../managers/characters-manager.ts";
import { ICharacter } from "../types";

export const HomeScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState<ReadonlyArray<ICharacter>>([]);
    // const [nextPage, setNextPage] = useState<string | null>(null);
    // const [prevPage, setPrevPage] = useState<string | null>(null);

    useEffect(() => {
        console.log("here");
        setIsLoading(true);
        getCharactersData()
            .then((data) => {
                if (data) {
                    setCharacters(data.results);
                }
            })
            .catch()
            .finally(() => setIsLoading(false));
    }, []);

    console.log(characters);

    const renderGenderCard = () => {
        return (
            <GenderContainer>

            </GenderContainer>
        );
    };

    return (
        <AppView title="Star Wars Favorites" shouldShowLogo={true}>
            {!isLoading ? (
                <>
                    <GenderContainer>
                        {renderGenderCard()}
                    </GenderContainer>
                </>
            ) : (
                <Loader/>
            )}
        </AppView>
    );
};

const GenderContainer = styled.View`

`;
