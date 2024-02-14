import React, { useState } from "react";
import { ReviewStarProps } from "../../utils/type";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton } from "@mui/material";

const ReviewStar = ({ item, repo, updateReviews, isSelected }: ReviewStarProps) => {

    console.log(`item->${item}`);
    console.log(`isSelected->${isSelected}`);

	const [isStarSelected, setSelectedStar] = useState(isSelected);
    const [reviewCount, setReviewCount] = useState(repo.reviewCount);



	const updateReview = () => {
        console.log(`item-->${item}`);
        console.log(`isStarSelected-->${isStarSelected}`);
        if(!isStarSelected) {
            setReviewCount(item);
            updateReviews(repo, item);
        } else {
            setReviewCount(0);
            updateReviews(repo, 0);
        }
        setSelectedStar(!isStarSelected);
	};


	let reviewButton = isStarSelected
         ? (
			<StarIcon />
		) : (
			<StarOutlineIcon />
		);

	return (
		<IconButton
			sx={{ display: "inline-block" }}
			size="large"
			onClick={updateReview}
		>
			{reviewButton}
		</IconButton>
	);
};

export default ReviewStar;
