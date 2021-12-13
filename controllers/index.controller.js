export const getIndex = (req, res, next) => {
  res.status(200).sendFile("index.html", { root: "./views" });
};
