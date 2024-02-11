import React from "react";

export type SearchProps = {
    handleSearch: ()=>void
};

export type TabPros = {
    handleChangeTab: (newActiveTab: number)=> void
    activeTab: number
    isFavorite: boolean
}

export type NavigationProps = SearchProps & TabPros;

export type TabContentProps = {
    activeTab: number,
    children: React.ReactNode,
    contentId: number
}