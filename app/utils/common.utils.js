exports.queryToFilter = async query => {
  Object.keys(query).forEach(key => {
    if (key === undefined) return;
    if (key === '' || query[key]?.toLowerCase() === 'all') delete query[key];
  });
  return query;
};
