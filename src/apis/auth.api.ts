import { doGet, doPost } from "../utils/request";

export const loginUser = async (body: object) => {
  try {
    const response = await doPost("/auth/login", body, false);
    return response?.data;
  } catch (err) {
    err;
  }
};

export const getMe = async () => {
  try {
    const response = await doGet("/auth/me");
    return response.data;
  } catch (err: any) {
    return err;
  }
};

export const resetPassword = async (
  oldPassword: string,
  newPassword: string
) => {
  const response = await doPost("/auth/reset-password", {
    oldPassword,
    newPassword,
  });

  if (response.statusCode) {
    return null;
  } else {
    return {
      errorMessage: response.data?.err?.message,
      statusCode: response.data.statusCode,
    };
  }
};
