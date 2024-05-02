const jwt = require('jsonwebtoken')

const SECRET_KEY = '124OPN H1341ONNEO31NHkldafj'

const nossoToken = jwt.sign(
  {
    name: 'Mario',
  },
  SECRET_KEY,
  {
    expiresIn: '10s',
    subject: '1',
  }
)

console.log(nossoToken);
