import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";

import { useAppDispatch } from "../../hooks";
import { addFavourite, removeFavourite } from "../../store";
import { EFontFamily, ICharacter, IFavourite, NavigationProps } from "../../types";
import { getScreenWidthWithMargin } from "../../utils";
import { LikeButton } from "../like-button/like-button.tsx";
import { StyledText } from "../text/text.styled.ts";

type CharacterListProps = {
    readonly data: ReadonlyArray<ICharacter>
    readonly favourites: ReadonlyArray<IFavourite>
}

const ITEM_HEIGHT = 60;

export const CharacterList = ({ data, favourites }: CharacterListProps) => {
    const { navigate } = useNavigation<NavigationProps>();
    const dispatch = useAppDispatch();

    const onItemPress = (item: ICharacter) => {
        navigate("CharacterDetailsScreen", {
            name: item.name,
            height: item?.height,
            eyeColor: item?.eye_color,
            mass: item?.mass,
            skinColor: item?.skin_color,
            gender: item?.gender,
            birthYear: item?.birth_year
        });
    };

    const getIsCharacterSaved = useCallback((itemId: string) => {
        return !!favourites?.find(favourite => favourite.id === itemId);
    }, [favourites]);

    const onLikeButtonPress = (item: ICharacter) => {
        const selectedCharacter = { gender: item.gender, id: item.url };

        const isItemAdded = getIsCharacterSaved(selectedCharacter.id);

        if (isItemAdded) {
            dispatch(removeFavourite(selectedCharacter));
        } else {
            dispatch(addFavourite(selectedCharacter));
        }
    };
    const renderCharacterItem = ({ item }: { readonly item: ICharacter}) => {
        const isLiked = getIsCharacterSaved(item.url);

        return (
            <StyledItemCard onPress={() => onItemPress(item)} key={item.url}>
                <InfoContainer>
                    <View>
                        <StyledText size={16} font={EFontFamily.MONTSERRAT}>{item.name}</StyledText>
                        <StyledText size={13} font={EFontFamily.MONTSERRAT} alignSelf="flex-start" alignText="center">{item.gender}</StyledText>
                    </View>
                </InfoContainer>
                <LikeButton onPressFromParent={() => onLikeButtonPress(item)} isItemLiked={isLiked}/>
            </StyledItemCard>
        );
    };

    return (
        <FlatList
            data={data}
            renderItem={renderCharacterItem}
            showsVerticalScrollIndicator={false}
            extraData={favourites}
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
