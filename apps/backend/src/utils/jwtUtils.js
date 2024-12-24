import jwt from 'jsonwebtoken';

/**
 * Función para generar un token JWT.
 * @param {Object} payload - Datos que se incluirán en el token (por ejemplo, id y email del usuario).
 * @param {string} secret - La clave secreta para firmar el token (se debe obtener de las variables de entorno).
 * @param {number} expiresIn - Tiempo de expiración del token en segundos.
 * @returns {string} El token JWT generado.
*/
export const generateToken = (
    payload,
    secret = process.env.JWT_SECRET,
    expiresIn = process.env.JWT_EXPIRATION_TIME
  ) => {
  return jwt.sign(payload, secret, { expiresIn });
};

/**
 * Función para verificar un token JWT.
 * @param {string} token - El token JWT que se quiere verificar.
 * @param {string} secret - La clave secreta para verificar el token (se debe obtener de las variables de entorno).
 * @returns {Object} Los datos decodificados del token si es válido.
 * @throws {Error} Si el token es inválido o ha expirado.
*/
export const verifyToken = (token, secret = process.env.JWT_SECRET) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};
