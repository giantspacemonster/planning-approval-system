import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
const cookies = {
  sessionToken: {
    name: `next-auth.session-token`,
    options: {
      httpOnly: true,
      sameSite: "none",
      path: "/",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
      secure: true,
    },
  },
  callbackUrl: {
    name: `next-auth.callback-url`,
    options: {
      // ... (add specific options as needed)
    },
  },
  csrfToken: {
    name: "next-auth.csrf-token",
    options: {
      // ... (add specific options as needed)
    },
  },
};

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    providers: [​
        Providers.Credentials({​
            name: 'credentials',​
            id: 'credentials',​
            credentials: {​
                username: { },​
                password: { }​
            },​
            async authorize(credentials, req) {​
                // ...​
            }​
        })​
    ],​
    session: {
      strategy: "jwt",
    },
    cookies: cookies,
    callbacks: {
      /* ... */
    },
  });
}

async function authorize(credentials) {​
    const response = await fetch('...', {​
        variables: {​
            email: credentials?.email,​
            password: credentials?.password,​
        },​
    });​
    const data = await response.json();​
    if (response.ok && data?.token) {​
        return  data;
    }​
    return Promise.reject(new Error(data?.errors));​​
};
export const jwt = async ({ token, user }) => {
    // first call of jwt function just user object is provided
    if (user && user.email) {
      return { ...token, ...user };
    }
  
    // on subsequent calls, token is provided and we need to check if it's expired
    if (token && token.accessTokenExpires) {
      if (Date.now() / 1000 < token.accessTokenExpires) return { ...token, ...user };
    } else if (token && token.refreshToken) return refreshAccessToken(token);
  
    return { ...token, ...user };
  };
  export const session = ({ session, token }) => {
    if (Date.now() / 1000 > token?.accessTokenExpires && token?.refreshTokenExpires && Date.now() / 1000 > token?.refreshTokenExpires) {
      return Promise.reject({
        error: new Error("Refresh token has expired. Please log in again to get a new refresh token."),
      });
    }
  
    const accessTokenData = JSON.parse(atob(token.token.split(".")?.[1]));
    session.user = accessTokenData;
    token.accessTokenExpires = accessTokenData.exp;
  
    session.token = token?.token;
  
    return Promise.resolve(session);
  };
    