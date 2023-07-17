const BASE_API = "localhost:3000";

const generateAPI = (path: string) => {
    return `${BASE_API}${path}`;
  };

const getAuthAPI = () => {
    return {
      login: () => generateAPI("/login"),
      forgotPassword: () => generateAPI("/forgotpassword"),
      resetPassword: () => generateAPI("/resetpassword"),
    };
  };

export {
    BASE_API,
    getAuthAPI,
  };