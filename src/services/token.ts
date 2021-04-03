import md5 from 'js-md5';

const PUBLIC_KEY = '852eec8cbc12ed3e3e6efb81fefc3938';
const PRIVATE_KEY = '99198cfc171d1bab89b9e09e8b659619bb3a9fe8';

const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

const Token = {
  timesTamp: timestamp,
  token: hash.hex(),
  keyPublic: PUBLIC_KEY
};

export default Token;
