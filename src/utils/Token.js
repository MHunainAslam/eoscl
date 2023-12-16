import { app_url, img_url } from "@/config";

export const GetLocaldata = (key) => {
    if (typeof window !== 'undefined') {
        const item = JSON.parse(localStorage.getItem(key));
        return item?.response?.data?.data;
    }
    return null;
};
export const imgurl = ({ src }) => {
    return `${img_url}${src}`
}