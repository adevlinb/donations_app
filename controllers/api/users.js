const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Questionnaire = require('../../models/questionnaire');

module.exports = {
    create,
    getQuestionnaire,
    submitQuestionnaire,
    login,
    getUser,
};

async function getUser(req, res) {
    try {
        res.json(req.user);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

async function getQuestionnaire(req, res) {
        try {
            console.log(req.params.id, "userId")
            const quest = await Questionnaire.findOne({user: req.params.id});
            res.json(quest);
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
}

async function submitQuestionnaire(req, res) {
        try {
            console.log(req.user, "userId")
            const quest = await Questionnaire.findOneAndUpdate({user: req.user._id}, req.body, {new: true});
            res.json(quest);
        } catch (err) {
            console.log(err)
            res.status(500).json(err);
        }
}

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const quest = Questionnaire.create({user: user._id})
        const token = createJWT(user);
        res.status(200).json(token);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

async function login(req, res) {
    try {
        // Find the user by their email address
        const email = await Email.findOne({ address: req.body.email });
        const user = await User.findOne({ _id: email.userId });
        if (!user) throw new Error();

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();

        res.json(createJWT(user));
    } catch (err) {
        console.log(err)
        res.status(500).json('Bad Credentials');
    }
}

// function checkToken(req, res) {
//     res.json(req.exp)
// }


// /* Helper Functions */

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

// async function updateUser(req, res) {
//     try {
//         let updatedUser = await User.findById(req.user._id)
//         return res.json(updatedUser);
//     } catch (err) {
//         res.status(400).json(err);
//     }

// }
