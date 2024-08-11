export const setupCookies = (res, session) => {
  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    expire: 1000 * 60 * 60 * 24 * 30,
  });
  res.cookie("sessionId", session._id, {
    httpOnly: true,
    expire: 1000 * 60 * 60 * 24 * 30,
  });
};
