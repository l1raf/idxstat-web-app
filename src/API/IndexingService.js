import axios from "axios"

export default class IndexingService {
    static getSource(url) {
        return `https://localhost:7094/source?uri=${url}`
    }

    static async getYandexResponse(url) {
        //TODO: replace with real call
        const response = await axios.get(`${process.env.REACT_APP_API_URL}status/fake?uri=${url}&engine=yandex`)
        return response.data
    }

    static async getGoogleResponse(url) {
        //TODO: replace with real call
        const response = await axios.get(`${process.env.REACT_APP_API_URL}status/fake?uri=${url}&engine=google`)
        return response.data
    }
}