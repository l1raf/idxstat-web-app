import React, { useState } from "react"
import IndexingService from "../../../API/IndexingService"
import { useFetchingAsync } from "../../../hooks/useFetching"
import SearchResult from "../result/SearchResult"
import classes from "./Search.module.css"

const Search = ({ placeholder }) => {

    const [inputUrl, setInputUrl] = useState("")
    const [showResult, setShowResult] = useState(false)
    const [url, setUrl] = useState("")

    const [googleResponse, setGoogleResponse] = useState("")
    const [yandexResponse, setYandexResponse] = useState("")

    const [fetchYandexResponse, isYandexResponseLoading, yandexError] = useFetchingAsync(async () => {
        await new Promise(r => setTimeout(r, 2000)); //TODO: remove
        const response = await IndexingService.getYandexResponse(inputUrl)
        setYandexResponse(response.totalSearchResults)
    })

    const [fetchGoogleResponse, isGoogleResponseLoading, googleError] = useFetchingAsync(async () => {
        await new Promise(r => setTimeout(r, 2000)); //TODO: remove
        const response = await IndexingService.getGoogleResponse(inputUrl)
        setGoogleResponse(response.totalSearchResults)
    })

    const search = () => {
        setUrl(inputUrl)
        setShowResult(true)
        fetchYandexResponse()
        fetchGoogleResponse()

        if (yandexError) {
            console.error("yandex: " + yandexError)
        }

        if (googleError) {
            console.error("google: " + googleError)
        }
    }

    return (
        <div className={classes.search}>
            <input
                className={classes.searchInput}
                value={inputUrl} onChange={e => setInputUrl(e.target.value)}
                placeholder={placeholder} />
            <button className={classes.searchButton} onClick={search}>Check</button>
            {showResult &&
                (<SearchResult
                    url={url}
                    googleResponse={googleResponse}
                    yandexResponse={yandexResponse}
                    isYandexResponseLoading={isYandexResponseLoading}
                    isGoogleResponseLoading={isGoogleResponseLoading} />)}
        </div>
    )
}

export default Search