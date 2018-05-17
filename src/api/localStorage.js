export const loadFromLocalStorage = () => {
  try {
    const stringified = localStorage.getItem('recipes');
    if (stringified === null) {
      return undefined;
    }
    return JSON.parse(stringified);
  } catch (error) {
    return undefined;
  }
};

export const saveToLocalStorage = recipes => {
  try {
    const stringify = JSON.stringify(recipes);
    localStorage.setItem('recipes', stringify);
  } catch (error) {}
};
