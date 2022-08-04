module.exports.getDate = function() {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

// Can also just write exports instead of module.exports
exports.getDay = function() {
    const today = new Date();
    const options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);
}