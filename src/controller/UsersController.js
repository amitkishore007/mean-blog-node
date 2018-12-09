import User from '../model/User';
const jwt = require('jsonwebtoken');

export default {

    login(req, res)
    {

    },
    signup(req, res)
    {
        const user = new User(req.body);
        user.save()
            .then((result) => {
             const token = jwt.sign({ id: result._id, email: result.email }, 'this_is_secret', { expiresIn: '1h' });
             res.status(200).json({ status: 'success', data: { token: token } });
            })
            .catch((error) => {
                 res.status(500).json({ status: 'failed', errors: error });
            });
    }

};