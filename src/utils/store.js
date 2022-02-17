import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadFromStore = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (err) {
    throw new Error(err);
  }
};

export const saveToStore = (key, item) => {
  try {
    AsyncStorage.setItem(key, item);
  } catch (err) {
    throw new Error(err);
  }
};

export const removeFromStore = (key) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (err) {
    throw new Error(err);
  }
};

export const addMovieToStore = async (key, item) => {
  try {
    const previousData = await loadFromStore(key);
    let updatedData = {};
    if (previousData && Object.keys(previousData)) {
      updatedData = previousData[item.id]
        ? previousData
        : { ...previousData, [item.id]: item };
    } else {
      updatedData = { [item.id]: item };
    }
    saveToStore(key, JSON.stringify(updatedData));
  } catch (err) {
    throw new Error(err);
  }
};

export const hideMovie = async (id) => {
  try {
    const previousData = await loadFromStore("hiddenMovies");
    if (previousData || !previousData?.includes(id)) {
      const updatedData = previousData ? [...previousData, id] : [id];
      saveToStore("hiddenMovies", JSON.stringify(updatedData));
    }
  } catch (err) {
    throw new Error(err);
  }
};
