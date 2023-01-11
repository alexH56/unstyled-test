/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = async () => ({
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js, jsx, ts, tsx}'],
    coverageDirectory: '<rootDir>/coverage/',
    roots: ['components'],
    verbose: false,
})
