import axios from "axios";

export const API_URL = "https://indexstatapi.azurewebsites.net/";
// export const API_URL = process.env.REACT_APP_API_URL;

export default class IndexingService {
    static getSourceForYandex(url, noindexColor, nofollowColor) {
        return `${API_URL}indexing/source?uri=${encodeURIComponent(url)}&engine=yandex` + 
        `&noindexColor=${encodeURIComponent(noindexColor)}&nofollowColor=${encodeURIComponent(nofollowColor)}`;
    }

    static getSourceForGoogle(url, nofollowColor) {
        return `${API_URL}indexing/source?uri=${encodeURIComponent(url)}&engine=google` + 
        `&nofollowColor=${encodeURIComponent(nofollowColor)}`;
    }

    static async getYandexIndexing(url) {
        //TODO: replace with real call
        const response = await axios.get(`${API_URL}indexing/status/fake?uri=${encodeURIComponent(url)}&engine=yandex`);
        return response.data;
    }

    static async getGoogleIndexing(url) {
        //TODO: replace with real call
        const response = await axios.get(`${API_URL}indexing/status/fake?uri=${encodeURIComponent(url)}&engine=google`);
        return response.data;
    }
}