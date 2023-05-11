function getDate() {
    return new Date()
}

function getDateTime () {
    return new Date().getTime()
}

const Sdk = {
    getDate,
    getDateTime
}

export default Sdk
