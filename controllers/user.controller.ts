export const publicAccess = (req, res) => {
  res.json({ message: "This is a public content" });
};

export const userAccess = (req, res) => {
  res.json({ message: "This is a user content" });
};

export const adminAccess = (req, res) => {
  res.json({ message: "This is an admin content" });
};

export const moderatorAccess = (req, res) => {
  res.json({ message: "This is a moderator content" });
};
