import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import React, { useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addFavourite, removeFavourite } from "../../store/slices/favourites/thunk.ts";

import { EFontFamily, ICharacter, NavigationProps } from "../../types";
import { getScreenWidthWithMargin } from "../../utils";
import { LikeButton } from "../like-button/like-button.tsx";
import { StyledText } from "../text/text.styled.ts";

type CharacterListProps = {
    readonly data: ReadonlyArray<ICharacter>
}

const ITEM_HEIGHT = 60;

export const CharacterList = ({ data }: CharacterListProps) => {
    const { navigate } = useNavigation<NavigationProps>();
    const dispatch = useAppDispatch();
    const { favourites } = useAppSelector(state => state.favourites);

    const onItemPress = (item: ICharacter) => {
        navigate("CharacterDetailsScreen", { name: item.name });
    };
    console.log('favorites', favourites);

    const onLikeButtonPress = async (item: ICharacter) => {
        const selectedCharacter = { gender: item.gender, id: item.url };
        console.log('fav before isItem', favourites);

        // Check if the selectedCharacter.id is present in the favourites array
        const isItemAdded = favourites.some(favorite => favorite.id === selectedCharacter.id);

        if (isItemAdded) {
            dispatch(removeFavourite(selectedCharacter));
        } else {
            dispatch(addFavourite(selectedCharacter));
        }
    };

    const renderCharacterItem = ({ item }: { readonly item: ICharacter}) => {


        return (
            <StyledItemCard onPress={() => onItemPress(item)} key={item.url}>
                <InfoContainer>
                    <View>
                        <StyledText size={16} font={EFontFamily.MONTSERRAT}>{item.name}</StyledText>
                        <StyledText size={13} font={EFontFamily.MONTSERRAT} alignSelf="flex-start" alignText="center">{item.gender}</StyledText>
                    </View>
                </InfoContainer>
                <LikeButton onPressFromParent={() => onLikeButtonPress(item)}/>
            </StyledItemCard>
        );
    };

    return (
        <FlashList
            data={data}
            estimatedItemSize={200}
            renderItem={renderCharacterItem}
            showsVerticalScrollIndicator={false}
            estimatedListSize={{ height: ITEM_HEIGHT, width: getScreenWidthWithMargin() }}
        />
    );
};

const StyledItemCard = styled.TouchableOpacity`
    width: ${getScreenWidthWithMargin}px;
    height: ${ITEM_HEIGHT}px;
    background-color: #F4F4F4;
    border-radius: 10px;
    align-self: center;
    margin-bottom: 15px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    flex-direction: row;
`;

const InfoContainer = styled.View`
    flex-direction: row;
    flex: 1;
`;
