const router = require("express").Router();

const Peg = require("../models/Peg")

//create a Peg

router.post("/", async (req, res) => {
    const newPeg = new Peg(req.body);
    try {
        const savedPeg = await newPeg.save()
        res.status(200).json(savedPeg)
    } catch (err) {
        res.status(500).json(err)
    }
});





//Get all  Pegs




module.exports = router