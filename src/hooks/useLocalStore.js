export const useLocalStore = (
  options = {
    appKey: 'APP',
  }
) => {
  const { appKey } = options;
  const hasStorage = window?.localStorage;
  const get = (key) => {
    if (!hasStorage) return null;
    const localData = window?.localStorage?.getItem(`${appKey}_${key}`) || null;
    if (!localData) {
      return null;
    }
    const parsed = JSON.parse(localData);
    return parsed;
  };

  const set = (key, data) => {
    if (!hasStorage) return null;
    const storageData = JSON.stringify(data);
    window.localStorage.setItem(`${appKey}_${key}`, storageData);
  };

  const del = (key) => {
    if (!hasStorage) return null;
    window.localStorage.removeItem(`${appKey}_${key}`);
  };

  return { get, hasStorage, set, del };
};
