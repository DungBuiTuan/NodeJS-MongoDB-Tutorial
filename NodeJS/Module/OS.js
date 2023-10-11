const os = require('os');

const obj = {
    type : os.type,
    user : os.userInfo,
    release : os.release
}

console.log(obj);