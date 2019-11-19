module.exports = (app) => {
    app.get('/api/reviews', getAllReviews)
    app.post('/api/reviews/', createReview)
    app.put('/api/reviews/:id', updateReview)
    app.delete('/api/reviews/:id', deleteReview)
} 