import express from 'express';
//import { movies, movieReviews, movieDetails } from './moviesData';
import { movies } from './moviesData';

const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(movies);
});

export default router;