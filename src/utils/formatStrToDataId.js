export const formatStrToDataId = (str) => {
  let s = str
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/gi, '');
  return s;
};
