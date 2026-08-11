import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authCookie = req.cookies.token;
    console.log("Auth Cookie:", authCookie);
    if (!authCookie) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {   
        const decoded = jwt.verify(authCookie, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'ERR_UNAUTHORIZED' });
    }

};