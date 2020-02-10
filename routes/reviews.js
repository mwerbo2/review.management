module.exports = (app) => {
    app.get('/api/reviews/:id', findReviewById)
    app.post('/api/reviews/', createReview)
    app.put('/api/reviews/:id', updateReview)
    app.delete('/api/reviews/:id', deleteReview)
    app.put('/api/reviews/comments/:review_id', commentOnReview)
    app.put('/api/reviews/votes/:review_id', voteOnReview)
} 