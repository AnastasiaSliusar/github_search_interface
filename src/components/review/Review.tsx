import React, { useState } from "react";
import { FavoritesProps, ReviewProps } from "../../utils/type";

import {
	Box,
} from "@mui/material";
import ReviewStar from "./ReviewStar";
import { starsArr } from "../../utils/data";

const Review = ({ repo, updateReviews }: ReviewProps) => {
	const [selectedReview, setCountSelectedReview] = useState(repo.reviewCount);

	const handleUpdateReviews = (repo: FavoritesProps, reviewCount: number)=>{
		setCountSelectedReview(reviewCount);
		updateReviews(repo, reviewCount);
	}

	let selectedStartsArr = starsArr.slice(0, selectedReview);
	let unSelectedStartsArr = starsArr.slice(selectedReview);

	let selectedStarts = selectedStartsArr.map((index)=>{
		return <ReviewStar item={index} repo={repo} updateReviews={handleUpdateReviews} isSelected={true} key={index} selectedReview={selectedReview}/>
	});

	let unSelectedStarts = unSelectedStartsArr.map((index)=>{
		return <ReviewStar item={index} repo={repo} updateReviews={handleUpdateReviews} isSelected={false} key={index} selectedReview={selectedReview}/>
	});

	
	return (
		<Box sx={{
			marginTop: '-10px',
			marginLeft: '10ox'
		}}>
			{selectedStarts}
			{unSelectedStarts}
		</Box>
	);
};

export default Review;
