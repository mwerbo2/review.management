var sql = require('../db/config')

let Review = (review) => {
    this.review = review.review
};

Review.getReviewsById = (req, result) => {
    sql.query("SELECT * FROM reviews WHERE id = ?;", [req.id], (err, data) => {
        if (err) {
            result(err, null)
        } else {
            result(null, data)
        };
    });
};

Review.createReview = (req, result) => {
    sql.query('INSERT INTO reviews (user_id, building_id, date_comment, review, thumbs_up, thumbs_down, comments) VALUES (?, ?, ?, ?, ?, ?, ?)', [req.user_id, req.building_id, req.date_comment, req.review, req.thumbs_up, req.thumbs_down, req.comments], (err, data) => {
        if (err) {
            result(err, null)
        } else {
            result(null, data)
        };
    });
};

Review.updateReview = (req, result) => {
    sql.query('UPDATE reviews SET review = ?', [req.review], (err, data) => {
        if (err) {
            result(err, null)
        } else {
            result(null, data)
        };
    });
};

Review.deleteReview = (req, result) => {
    sql.query('DELETE FROM reviews WHERE id = ?;', [req.id], (err, data) => {
        if (err) {
            result(err, null)
        } else {
            result(null, data)
        }
    })
}

Review.commentOnReview = (req, result) => {
    sql.query('UPDATE reviews SET comments = ?', [req.comment], (err, data) => {
        if (err) {
            result(err, null)
        } else {
            result(null, data)
        }
    })
}