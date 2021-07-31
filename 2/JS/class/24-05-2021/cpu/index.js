const { cpus } = require('os');

const getCpusName = () => cpus().map(item => item.model);
const getCpusName = () => cpus().map(item => item.speed);

module.exports = {
    getNames: getCpusName,
    getSpeeds: getCpusName,
};