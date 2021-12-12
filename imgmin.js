const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')
const PNGImages = './src/assets/*.png'
const JPEGImages = './src/assets/*.jpeg'
const output = './src/assets/webp'

// 将 jpeg png 图片转换为 webp 格式
imagemin(['./src/assets/*.{jpeg,png}'], output, {
  use: [
    imageminWebp({
      quality: 85,
    }),
  ],
})
// imagemin([JPEGImages], output, {
//     use: [
//         imageminWebp({
//             quality: 75,
//         }),
//     ],
// })
// const convertPNGToWebp = () =>
//   imagemin([PNGImages], output, {
//     use: [
//       imageminWebp({
//         quality: 85,
//       }),
//     ],
//   })
// const convertJPGToWebp = () =>
//   imagemin([JPEGImages], output, {
//     use: [
//       imageminWebp({
//         quality: 75,
//       }),
//     ],
//   })
// Promise.all([convertPNGToWebp, convertJPGToWebp]).catch((error) => console.log(error))
