export const replaceFromString = (text, replacementObject) => {
  const replacementReg = new RegExp(Object.keys(replacementObject).join("|"), 'g');
  return text.replace(replacementReg, (e) => replacementObject[e]);
};

// file
// read
// write