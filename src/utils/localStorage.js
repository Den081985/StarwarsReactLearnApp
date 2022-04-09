//функция получения элементов из хранилища
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};
//функция добавления элементов из хранилища

export const putLocalStorage = (key, data) => {
  //   const items = getLocalStorage();
  //   items.push(item);
  localStorage.setItem(key, JSON.stringify(data));
};
