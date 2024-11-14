import { message } from "antd";

const useMessages = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = ({
    type = "info",
    content = "Default message",
    duration = 2.5,
    loading = false,
  } = {}) => {
    if (loading) {
      messageApi
        .open({
          type: "loading",
          content,
          duration,
        })
        .then(() => message.success("Loading finished", duration))
        .then(() => message.info("Process completed", duration));
    } else {
      messageApi.open({
        type,
        content,
        duration,
      });
    }
  };

  return {
    contextHolder,
    showMessage,
  };
};

export default useMessages;
