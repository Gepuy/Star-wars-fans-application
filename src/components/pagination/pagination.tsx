/* eslint-disable functional/immutable-data */
import React, { useEffect, useMemo } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { EFontFamily } from "../../types";
import { StyledText } from "../text/text.styled.ts";

interface PaginationProps {
    readonly currentPage: number;
    readonly totalPages: number;
    readonly onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
 currentPage, totalPages, onPageChange
}) => {
    const generatePagesSubset = () => {
        const visiblePagesCount = 3;
        const pagesSubset: (number | string)[] = [];

        if (totalPages <= visiblePagesCount * 2 + 1) {
            pagesSubset.push(...Array.from({ length: totalPages }, (_, index) => index + 1));
        } else {
            const startPages = Array.from({ length: visiblePagesCount }, (_, index) => currentPage - visiblePagesCount + index).filter(
                (page) => page > 0
            );
            const endPages = Array.from({ length: visiblePagesCount }, (_, index) => currentPage + 1 + index).filter(
                (page) => page <= totalPages
            );

            if (currentPage + visiblePagesCount >= totalPages) {
                const startPagesToAdd = Math.min(visiblePagesCount * 2 - endPages.length, totalPages - endPages[endPages.length - 1]);
                const additionalPages = Array.from({ length: startPagesToAdd }, (_, index) => endPages[endPages.length - 1] + 1 + index);
                pagesSubset.push(...additionalPages);
            }

            if (currentPage - visiblePagesCount > 1) {
                pagesSubset.push("...", ...startPages, currentPage, ...endPages);
            } else {
                pagesSubset.push(...startPages, currentPage, ...endPages);
            }

            if (currentPage + visiblePagesCount < totalPages) {
                pagesSubset.push("...", totalPages);
            }
        }

        return pagesSubset;
    };

    const pagesSubset = useMemo(() => generatePagesSubset(), [currentPage, totalPages]);

    useEffect(() => {
        onPageChange(currentPage);
    }, [currentPage, onPageChange]);

    return (
        <PaginationContainer>
            {pagesSubset.map((page, index) => (
                <TouchableOpacity
                    onPress={() => onPageChange(typeof page === "number" ? page : currentPage)}
                    style={{
                        height: 25,
                        width: 25,
                        backgroundColor: page === currentPage ? "#888" : "transparent",
                        borderRadius: 13
                    }}
                >
                    <StyledText
                        key={index}
                        font={EFontFamily.MONTSERRAT}
                        size={18}
                        color={page === currentPage ? "#000" : "#888"}
                    >
                        {page}
                    </StyledText>
                </TouchableOpacity>
            ))}
        </PaginationContainer>
    );
};

const PaginationContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 40px;
`;

export default Pagination;
