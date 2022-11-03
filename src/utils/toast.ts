import toaster from "react-hot-toast";

const toast = {
  success: (message: string) =>
    toaster.success(message, {
      className: "text-sm",
      position: "bottom-right",
    }),
  error: (message: string) =>
    toaster.error(message, { className: "text-sm", position: "bottom-right" }),
};

export const useToast = () => toast;
