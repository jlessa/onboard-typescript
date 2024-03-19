import axios from "axios";
import { Environment } from "../../../environment";

export const Api = axios.create({
    baseURL: Environment.BASE_API,
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem(Environment.TOKEN_STRING) || '')}`
    }
});