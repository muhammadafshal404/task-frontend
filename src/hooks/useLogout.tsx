export const useLogout = () => {
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return { logout };
};
