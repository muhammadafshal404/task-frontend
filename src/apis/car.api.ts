import { doDelete, doGet, doPatch, doPost } from "../utils/request";

export const dashboardStats = async () => {
  try {
    const response = await doGet("/car/total/count");
    return response;
  } catch (err) {
    return err;
  }
};

export const getAllCars = async () => {
  try {
    const response = await doGet("/car");
    return response;
  } catch (err) {
    return err;
  }
};

export const getCar = async (id: string) => {
  try {
    const response = await doGet(`/car/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const editCar = async (body: object, id: string) => {
  try {
    const response = await doPatch(`/car/${id}`, body);
    return response;
  } catch (err: any) {
    return err;
  }
};

export const createCar = async (body: object) => {
  try {
    const response = await doPost("/car/", body);
    return response;
  } catch (err: any) {
    return err;
  }
};

export const deleteCar = async (id: string) => {
  try {
    const response = await doDelete(`/car/${id}`, {});
    return response;
  } catch (err: any) {
    return err;
  }
};
