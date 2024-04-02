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
  localStorage.removeItem("userDetails");
  window.location.href = "/";
};

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return "";
};
const publicRoutes = ["/", "/login", "/property-list", "/all-brokers"];

export const checkUrlAccess = (isLogged, url, redirectUser, role) => {
  const isPublicRoute = publicRoutes.some((publicRoute) => {
    if (publicRoute.includes("/:")) {
      // Handle dynamic routes
      const baseRoute = publicRoute.split("/:")[0];
      return url.startsWith(baseRoute);
    }
    return url === publicRoute;
  });

  if (!isLogged && !isPublicRoute) {
    redirectUser("/login");
  }
  if (isLogged) {
    if (url.includes("/admin") && role !== "admin" && role !== "superAdmin") {
      redirectUser("/");
    } else if (url.includes("/user") && role !== "user") {
      redirectUser("/");
    } else if (url.includes("/consultant") && role !== "broker") {
      console.log(url, isLogged);
      redirectUser("/");
    }
  }
};
