import axios from "axios";

export default class IndexingService {
    static getSourceForYandex(url) {
        return `${process.env.REACT_APP_API_URL}indexing/source?uri=${encodeURIComponent(url)}&cssFileAddress=http://localhost:3000/noindex-yandex.css`;
    }

    static getSourceForGoogle(url) {
        return `${process.env.REACT_APP_API_URL}indexing/source?uri=${encodeURIComponent(url)}&cssFileAddress=http://localhost:3000/noindex-google.css`;
    }

    static async getYandexIndexing(url) {
        //TODO: replace with real call
        const response = await axios.get(`${process.env.REACT_APP_API_URL}indexing/status/fake?uri=${encodeURIComponent(url)}&engine=yandex`);
        return response.data;
    }

    static async getGoogleIndexing(url) {
        //TODO: replace with real call
        const response = await axios.get(`${process.env.REACT_APP_API_URL}indexing/status/fake?uri=${encodeURIComponent(url)}&engine=google`);
        return response.data;
    }
}