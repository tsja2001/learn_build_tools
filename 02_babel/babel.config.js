// module.exports = {
//   presets: [
//     "@babel/preset-env",
//     {
//       corejs: 3,
//       useBuiltIns: "entry",
//     },
//   ],
// };
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: 3, // 使用corejs版本, 一般写3
        useBuiltIns: "usage",
      },
    ],
    ["@babel/preset-react"],
    ["@babel/preset-typescript"],
  ],
};
