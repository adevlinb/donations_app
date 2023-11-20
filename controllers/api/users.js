
const User = require('../../models/user');


module.exports = {
    create,
    // login,
    // checkToken,
    // updateUser,
    // getUser,
    // getAgoraId
};

// async function getAgoraId(req, res) {
//     try {
//         res.status(200).json(process.env.AGORA_APP_ID);
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err);
//     }
// }

// async function getUser(req, res) {
//     try {
//         res.json(req.user);
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err);
//     }
// }

async function create(req, res) {
    try {
        console.log("youve hit the server")
        console.log(req.body)
        // token will be a string
        // const token = createJWT(newUser);
        // Yes, we can serialize a string
        // res.json(token);
        res.json(req.body)
    } catch (err) {
        console.log(err)
        // Probably a dup email
        res.status(500).json(err);
    }
}

// async function login(req, res) {
//     try {

//         // Find the user by their email address
//         const email = await Email.findOne({ address: req.body.email });
//         const user = await User.findOne({ _id: email.userId });
//         if (!user) throw new Error();

//         const match = await bcrypt.compare(req.body.password, user.password);
//         if (!match) throw new Error();

//         res.json(createJWT(user));
//     } catch (err) {
//         console.log(err)
//         res.status(500).json('Bad Credentials');
//     }
// }

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
