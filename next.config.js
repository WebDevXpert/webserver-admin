const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_ID: '691983221309-i1k2atbg8o4b3vm45i4jfeabf7a1tac9.apps.googleusercontent.com',
    GOOGLE_SECRET: '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',
    GITHUB_ID: 'baf9daf11e3f94075168',
    GITHUB_SECRET: '63b9f52bd12f05ae15c53f64e14b877850c2ca91',
    JWT_SECRET: 'khgfkhfhsbdshbdshbdifvbdsh',
    MONGO_URL: 'mongodb+srv://WebServerAdmin:WebServerAdmin@cluster0.rezrvcy.mongodb.net/WebServer',
    // NEXT_PUBLIC_API_BASE_URL: 'https://wxj7a06cdl.execute-api.us-east-1.amazonaws.com/default/carbonopsPutRecord'
    NEXT_PUBLIC_API_BASE_URL: 'http://localhost:3000'
    // NEXT_PUBLIC_API_BASE_URL:'https://webserver-admin.vercel.app'
  },
}
module.exports = nextConfig;