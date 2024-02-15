import React from "react";

export type SearchProps = {
    handleSearch: (searchQuery: string) => void
};

export type TabPros = {
    handleChangeTab: (newActiveTab: number) => void
    activeTab: number
}

export type NavigationProps = SearchProps & TabPros;

export type TabContentProps = {
    activeTab: number
    children: React.ReactNode
    contentId: number
}

export type ContentProps = {
    activeTab: number
    searchQuery: string
}


export type OwnerRepositoryProps = {
    login: string
    avatarUrl?: string
    id: string
    url: string
}

export type SearchResultProps = {
    description?: string | null
    id: string
    name: string
    createdAt: string
    isPrivate: boolean
    url: string
    owner: OwnerRepositoryProps
}

export type FavoritesProps = SearchResultProps & {
    isFavorite:boolean
    reviewCount: number
}

export type FavoritesListProps = {
    [key: string]:FavoritesProps
}

export type RepoItemProps = {
	repo: SearchResultProps
	isFavorite: boolean
	updateFavorites: (repo: SearchResultProps, isFavorite: boolean) => void
    children?: React.ReactNode
};

//
export type SearchContentProps = {
    searchQuery: string
    updateData: (searchResult: SearchResultProps[]) => void
    updateFavorites:(repo: SearchResultProps, isFavorite: boolean) => void
}

///////
export type RepositoryListProps = {
    repos: SearchResultProps[]
    favoriteRepos: FavoritesListProps
    updateFavorites:(repo: SearchResultProps, isFavorite: boolean) => void
}

export type SearchRepositoriesProps = {
	searchQuery: string
	favoriteRepos: FavoritesListProps
	updateFavorites:(repo: SearchResultProps, isFavorite: boolean) => void
	updateData: (repos: SearchResultProps[]) => void
} 

export type FavoritesPageProps = {
    favorites: FavoritesListProps
    updateFavorites:(repo: SearchResultProps, isFavorite: boolean) => void
    updateReviews: (repo: FavoritesProps, reviewCount: number) => void;
}

export type ReviewProps = {
	repo: FavoritesProps
	updateReviews: (repo: FavoritesProps, reviewCount: number) => void
};

export type ReviewStarProps = {
    item: number
    repo: FavoritesProps
	updateReviews: (repo: FavoritesProps, reviewCount: number) => void
    isSelected: boolean
    selectedReview: number
}