import toast from "react-hot-toast";

export const notificationAdd = (primary: string, text: string) => {
  toast.success(text, {
    style: {
      backgroundColor: "#13245F",
      color: primary,
    },
    iconTheme: {
      primary: primary,
      secondary: "#13245F",
    },
  });
};
