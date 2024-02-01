const express = require('express');
const router = express.Router();

const api = process.env.BASE_URL;

// router.use(api)

router.use(api, (req, res) => res.json("No Api found on this Route"));


module.exports = router;