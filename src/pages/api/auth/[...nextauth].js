// import Providers from "next-auth/providers";
// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     // ...add more providers here
//   ],
// });
import NextAuth from "next-auth";

// const options = {
//   providers: [
//     GoogleProvider({
//       clientId:
//         "122629621212-jmvkitmdjvrfnnqfmklk9r53bq5hfp2u.apps.googleusercontent.com",
//       clientSecret: "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",
//     }),
//   ],
// };

import GitHubProvider from "next-auth/providers/github";
const options = {
  providers: [
    GitHubProvider({
      clientId: "e2a9106472ad8814bf4c",
      clientSecret: "4f174e2868fc0b164895eb7fbeb43ba18ea8a2b7",
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
