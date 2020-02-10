import { Result } from "express-validator";
const Review = require('../models/review');



// GET, PRIVATE, /api/reviews/:id, get review by id
const findReviewById = (req, res) => {
    try {
        const { id } = req.params;
            Review.findReviewById(id, (review, err) => {
                if (err) res.status(400).send(err)
                res.status(200).send(review)
            })
    } catch (error) {
        res.status(400).send(error)
    }
}
// POST, PRIVATE, /api/reviews/, create a review
const createReview = (req, res) => {
    // ToDo: input validation
    try {
        Review.createReview(req.body, (err, review) => {
            if (err) res.status(400).send(err)
            res.status(200).send(review)
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

// PUT, PRIVATE, /api/reviews/:id, edit a review
const updateReview = (req, res) => {
    try {
        const reviewFields = {
            id = req.params.id,
            review = req.body.review
        }
        Review.updateReview(reviewFields, (err, review) => {
            if (err) res.status(400).send(err)
            res.status(200).send(review)
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

// DELETE, PRIVATE, /api/reivews/:id, delete a review
const deleteReview = (req, res) => {
    try {
        Review.deleteReview(req.params.id, (err, review) => {
            if (err) res.status(400).send(err)
            res.status(200).send(review)
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

// PUT, PRIVATE, /api/reviews/comments/:review_id, add a comment to a review
const commentOnReview = (req, res) => {
    try {
        const reviewFields = {
            id = req.params.id,
            comment = req.body.comment
        }
        Review.commentOnReview(reviewFields, (err, review) => {
            if (err) res.status(400).send(err)
            res.status(200).send(review);
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

// PUT, PRIVATE, /api/reviews/votes/:review_id, thumbs up or down a review
const voteOnReview = (req, res) => {
    try {
        const reviewFields = {
            id: req.params.id,
            vote: req.body.vote,
            value: req.body.value,
        };
        Review.submitVote(reviewFields, (err, review) => {
            if (err) res.status(400).send(err)
            res.status(200).send(review);
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    findReviewById, 
    createReview,
    updateReview,
    deleteReview,
    commentOnReview,
    voteOnReview
};