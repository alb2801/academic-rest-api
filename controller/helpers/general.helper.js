/** packeages */
const CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken")


/** Encrypt password */
exports.EncryptPassword = (password) => {
    let secretkey = config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretkey).toString();
    return encryptedPassword;
};

exports.DecryptPassword = (crytedPassword) => {
    let secretkey = config.get("secretkeys").cryptojs;
    let bytes = CryptoJS.AES.decrypt(crytedPassword, secretkey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
}

exports.GenerateToken = (user) => {
    let secretkey = config.get("secretkeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + config.get("sesionTime"),
        data: {
            username: user.username,
            id: user._id,
            role: user.role
        }
    }, secretkey);
    return token
}