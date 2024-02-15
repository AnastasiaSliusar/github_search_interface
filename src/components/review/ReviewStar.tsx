import React, { useState } from "react";
import { ReviewStarProps } from "../../utils/type";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton } from "@mui/material";

const ReviewStar = ({ item, repo, updateReviews, isSelected, selectedReview }: ReviewStarProps) => {
    const [isStarSelected, setSelectedStar] = useState(isSelected);
    const updateReview = () => {

        if (!isStarSelected) {
            updateReviews(repo, item);
            setSelectedStar(!isStarSelected);
        } else {
            if (selectedReview === item) {
                updateReviews(repo, 0);
                setSelectedStar(!isStarSelected);
            } else {
                updateReviews(repo, item);
            }
        }
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
