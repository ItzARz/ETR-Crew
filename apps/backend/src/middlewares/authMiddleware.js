import authService from '../services/authService.js';

//Usamos verifyToken del servicio authService para verificar la validez del token de autenticación.
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send({ message: 'Access denied, no token.' });

  try {
    const user = authService.verifyToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Invalid token.' });
  }
};

export default authMiddleware;
