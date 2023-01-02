/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'
// function getBasePath() {
//   var basePath = ''

//   if (isProd && process.env.BASE_PATH){
//       if (process.env.BASE_PATH.startsWith("/") ){
//           basePath = process.env.BASE_PATH;
//       } else {
//           basePath = "/" + process.env.BASE_PATH;
//       }
//   } 

//   console.log("getBasePath() : isProd = " + isProd);
//   console.log("getBasePath() : basePath = " + basePath);

//   return basePath
// }
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/account/list',
        destination: `https://b6a4-119-82-104-94.in.ngrok.io/account/list`,
      },
    ]
  },
  // assetPrefix: getBasePath() ,

  //   publicRuntimeConfig: {
  //       basePath: getBasePath() ,
  //   },
  reactStrictMode: true,
}

module.exports = nextConfig
