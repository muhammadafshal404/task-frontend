import { doGet } from "../utils/request";

export const dashboardStats = async () => {
  try {
    const response = await doGet("/car/total/count");
    console.log("response", response);
    return response;
  } catch (err) {
    return err;
  }
};
