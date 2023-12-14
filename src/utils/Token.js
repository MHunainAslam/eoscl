export const GetLocaldata = (key) => {
    if (typeof window !== 'undefined') {
        const item = JSON.parse(localStorage.getItem(key));
        return item?.response?.data?.data;
    }
    return null;
};