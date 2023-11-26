const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Questionnaire = require('../../models/questionnaire');
const uploadFile = require('../../config/upload-file');

module.exports = {
    create,
    getQuestionnaire,
    submitQuestionnaire,
    login,
    getUser,
    uploadProfilePhoto,
    updateProfile
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
        const quest = await Questionnaire.findOne({ user: req.params.id });
        res.json(quest);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

async function submitQuestionnaire(req, res) {
    try {
        const quest = await Questionnaire.findOneAndUpdate({ user: req.user._id }, req.body, { new: true });
        res.json(quest);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const quest = Questionnaire.create({ user: user._id })
        const token = createJWT(user);
        res.status(200).json(token);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json(createJWT(user));
    } catch {
        res.status(400).json('Bad Credentials');
    }
}

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

async function updateProfile(req, res) {
    try {
        let updatedUser = await User.findOneAndUpdate({ _id: req.user._id}, req.body, { new: true })
        updatedUser = await updatedUser.save();
        return res.json(updatedUser);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function uploadProfilePhoto(req, res) {
    try {
        if (req.file) {
            const photoURL = await uploadFile(req.file);            
            res.json({url: photoURL});
        } else {
            throw new Error('Must select a file');
        }
    } catch (err) {
        console.log(err)
        res.status(400).json(err.message);
    }
}