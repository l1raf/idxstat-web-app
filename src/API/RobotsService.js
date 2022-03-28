import axios from "axios";

export default class RobotsService {
    static async getRobotsInfo(url) {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}robots/disallowed?uri=${url}`);
        return response.data;
    }
}