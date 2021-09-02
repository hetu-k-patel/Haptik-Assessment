export const addToLocalStorage = (data) => {
   localStorage.setItem('friendListData', JSON.stringify(data));
};

export const getFromLocalStorage = () => {
   return JSON.parse(localStorage.getItem('friendListData'));
};
