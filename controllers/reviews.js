import { Result } from "express-validator";
// const Review = require('../models/reviews);



// GET, PRIVATE, /api/reviews/:id, get all reviews
const findReviewById = (req, res) => {
    try {
        const { id } = req.params;
            Review.findReviewById(id, (review, err) => {
                if (err) 
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

// PUT, PRIVATE, /api/reviews/:id, create a review
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

const commentOnReview = (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).send(error)
    }
}

const voteOnReview = (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).send(error)
    }
}