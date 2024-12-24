import db from '../database/db.js';

class User {
  static generateUUID() {
    return `${crypto.randomBytes(4).toString('hex')}-${crypto.randomBytes(2).toString('hex')}-4${crypto.randomBytes(2).toString('hex')}-${crypto.randomBytes(2).toString('hex')}-${crypto.randomBytes(6).toString('hex')}`;
  }

  static async findByCallsign(callsign) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM pilots WHERE callsign = ?', [callsign], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }

  static async findByEmail(email) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM pilots WHERE email = ?', [email], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  }

  static async create(id, callsign, email, passwordHashed) {
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO pilots (id, callsign, email, password) VALUES (?, ?, ?, ?)',
        [id, callsign, email, passwordHashed],
        (err, results) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }
}

export default User;
