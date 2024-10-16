

/**
 * Find Public ID
 */
export const findPublicId = (url) => {
  return url.split("/")[url.split("/").length - 1].split(".")[0];
  // return url.split("/")[url.split("/").length-1].split(".")[0];  // eta diye dekte hbe 
};

