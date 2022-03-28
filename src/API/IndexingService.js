import axios from "axios";

export default class IndexingService {
    static getSource(url) {
        return `${process.env.REACT_APP_API_URL}indexing/source?uri=${url}`;
    }

    static async getYandexIndexing(url) {
        //TODO: replace with real call
        const response = await axios.get(`${process.env.REACT_APP_API_URL}indexing/status/fake?uri=${url}&engine=yandex`);
        return response.data;
    }

    static async getGoogleIndexing(url) {
        //TODO: replace with real call
        const response = await axios.get(`${process.env.REACT_APP_API_URL}indexing/status/fake?uri=${url}&engine=google`);
        return response.data;
    }
}