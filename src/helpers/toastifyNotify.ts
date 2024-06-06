import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToast = (msg:string)  => {
    toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
} 
export const errorToast = (msg:string)  => {
    toast.error(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
} 