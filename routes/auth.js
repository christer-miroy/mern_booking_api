import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Auth end point");
});
router.get("/register", (req, res) => {
    res.send("Register end point");
});

export default router;