import jwt from 'jsonwebtoken';

export function authenticate(req, res, next) 
{
    if (!req.header('Authorization')) {
        return res.status(401).json({ status: 'failed', errors: "unauthorized" });
    }

    const xAuth = req.header('Authorization').split(' ');
    if (xAuth[0] != 'Bearer' || !xAuth[1]) {
        return res.status(401).json({ status: 'failed', errors: "unauthorized" });
    }
    
    try {
        const decoded = jwt.verify(xAuth[1], 'this_is_secret');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ status: 'failed', errors: 'unauthorized' });
    }
}