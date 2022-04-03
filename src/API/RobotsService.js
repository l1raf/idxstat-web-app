import axios from "axios";

export default class RobotsService {
    static async getRobotsInfo(url) {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}robots/disallowed?uri=${encodeURIComponent(url)}`);
        return response.data;
    }

    static async getRobotsHeaders(url) {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}robots/headers?uri=${encodeURIComponent(url)}`);
        return response.data;
    }
}