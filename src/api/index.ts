import axios from "axios";
import * as user from "./user";

export const fetchData = axios;

export const BASE_URL = "http://localhost:5000/api";
export const API = { user };
