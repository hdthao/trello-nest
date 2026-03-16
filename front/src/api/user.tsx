import axios from "axios";
import type { User } from "../interface/user.interface";


const API_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = (data: User) => {
  return instance.post("/signup", data);
};

export const login = (data: User) => {
  return instance.post("/signin", data);
};