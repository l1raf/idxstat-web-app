import axios from "axios";
import { API_URL } from "./IndexingService";

export default class RobotsService {
    static async getRobotsInfo(url) {
        const response = await axios.get(`${API_URL}robots/disallowed?uri=${encodeURIComponent(url)}`);
        return response.data;
    }

    static async getRobotsHeaders(url) {
        const response = await axios.get(`${API_URL}robots/headers?uri=${encodeURIComponent(url)}`);
        return response.data;
    }
}