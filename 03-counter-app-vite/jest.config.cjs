// jest.config.js
module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom', // Asegúrate de que esta línea esté presente
};
