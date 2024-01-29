export const getCurrentDate = () => {
  const date = new Date().getTime();
  const offsetTime = new Date().getTimezoneOffset();
  const result = date - offsetTime * 60000;
  return result;
};
