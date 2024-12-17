const paginate = async (model, page = 1, limit = 10, excludeFields = []) => {
    try {
      const startIndex = (page - 1) * limit;
  
      // Exclude fields, e.g., password
      const excludedFields = excludeFields.length
        ? excludeFields.map((field) => `-${field}`).join(' ')
        : '';
  
      // Fetch data with pagination
      const data = await model
        .find()
        .skip(startIndex)
        .limit(limit)
        .select(excludedFields);
  
      // Total count of documents
      const totalDocuments = await model.countDocuments();
  
      return {
        totalDocuments,
        currentPage: page,
        totalPages: Math.ceil(totalDocuments / limit),
        data,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  module.exports = paginate;
  