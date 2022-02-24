// ESM   -> 브라우저 환경에서 사용하는 방식
// CommonJS -> node.js 에서 사용하는 방식

// import autoprefixer from 'autoprefixer'

// export {
//   plugins: [
//     autoprefixer
//   ]
// }

module.exports = {
  plugins: [require('autoprefixer')],
};
