exports.getUsers = (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 3;
    const userData = req.userData;

    // Calculate the start and end indexes for the requested page
    const startIdx = (page - 1) * pageSize;
    const endIdx = page * pageSize;

    // Slice the products array based on the indexes
    const paginatedUser = userData.slice(startIdx, endIdx);

    // Calculate the total number of pages
    const totalPages = Math.ceil(userData.length / pageSize);

    return res.status(200).json({ data: paginatedUser, totalPages });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", data: error.message });
  }
};
