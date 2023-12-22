import jwt from "jsonwebtoken";

const secretKey = process.env.NEXTAUTH_SECRET;

export const authenticate = (handler) => async (req, res) => {
  // Extract the token from the request headers
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify the token with your secret key
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded data to the request for future use
    req.user = decoded;

    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
