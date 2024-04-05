export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  if (token) return true;
  return false;
};

export const getItem = (key) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  return null;
};

export const setItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data || {}));
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  window.location.href = "/signin";
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return "";
};
const publicRoutes = ["/", "/signin", "/students"];

export const checkUrlAccess = (url, setIsLogged) => {
  const isPublicRoute = publicRoutes.some((publicRoute) => {
    return url === publicRoute;
  });

  if (!isLoggedIn() && !isPublicRoute) {
    // router.push("/signin");
    window.location.href = "/signin";
    setIsLogged(false);
  }
};
