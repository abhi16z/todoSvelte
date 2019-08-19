export const setLocalStorageData = key => data => localStorage.setItem(key, JSON.stringify(data));
export const getLocalStorageData = key => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}