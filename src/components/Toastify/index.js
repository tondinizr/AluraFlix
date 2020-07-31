import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sucess = (msg, onClose) =>
  toast.success(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onClose,
  });

const Info = (msg, onClose) =>
  toast.info(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onClose,
  });

const Warning = (msg, onClose) =>
  toast.warn(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onClose,
  });

const Error = (msg, onClose) =>
  toast.error(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onClose,
  });

const Default = (msg, onClose) =>
  toast(msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    onClose,
  });

export { Sucess, Info, Warning, Error, Default };
