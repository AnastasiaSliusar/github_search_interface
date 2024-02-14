import React, { useState } from "react";
import { FavoritesProps, ReviewProps } from "../../utils/type";

import {
	Typography,
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

	console.log(`selectedStartsArr-->${selectedStartsArr}`);


	let unSelectedStartsArr = starsArr.slice(selectedReview);
	console.log(`unSelectedStartsArr-->${unSelectedStartsArr}`);

	let selectedStarts = selectedStartsArr.map((index)=>{
		return <ReviewStar item={index} repo={repo} updateReviews={handleUpdateReviews} isSelected={true} key={index}/>
	});

	let unSelectedStarts = unSelectedStartsArr.map((index)=>{
		return <ReviewStar item={index} repo={repo} updateReviews={handleUpdateReviews} isSelected={false} key={index}/>
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
