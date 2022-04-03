import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import IndexingService from "../../../API/IndexingService";
import RobotsService from "../../../API/RobotsService";
import { useFetchingAsync } from "../../../hooks/useFetching";
import Info from "../info/Info";
import SearchResult from "../result/SearchResult";
import classes from "./Search.module.css";

const Search = () => {

    const [inputUrl, setInputUrl] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [url, setUrl] = useState("");

    const [googleResponse, setGoogleResponse] = useState("");
    const [yandexResponse, setYandexResponse] = useState("");
    const [robotsResponse, setRobotsResponse] = useState({ robotsUri: "", yandex: [], google: [] });
    const [headersResponse, setHeadersResponse] = useState({ headers: [] });

    const [fetchYandexStatus, isYandexResponseLoading, yandexError] = useFetchingAsync(async () => {
        const response = await IndexingService.getYandexIndexing(inputUrl);
        setYandexResponse(response.totalSearchResults);
    });

    const [fetchGoogleStatus, isGoogleResponseLoading, googleError] = useFetchingAsync(async () => {
        const response = await IndexingService.getGoogleIndexing(inputUrl);
        setGoogleResponse(response.totalSearchResults);
    });

    const [fetchRobotsTxt, , robotsError] = useFetchingAsync(async () => {
        const response = await RobotsService.getRobotsInfo(inputUrl)
        setRobotsResponse(response);
    });

    const [fetchHeaders, , headersError] = useFetchingAsync(async () => {
        const response = await RobotsService.getRobotsHeaders(inputUrl)
        setHeadersResponse(response);
    });

    const search = () => {
        if (!inputUrl) {
            return;
        }

        setRobotsResponse({ robotsUri: "", yandex: [], google: [] })
        setHeadersResponse({ headers: [] });
        setGoogleResponse("");
        setYandexResponse("");

        setUrl(inputUrl);
        setShowResult(true);
        fetchYandexStatus();
        fetchGoogleStatus();
        fetchRobotsTxt();
        fetchHeaders();

        if (yandexError) {
            console.error("yandex: " + yandexError);
            setYandexResponse("");
        }

        if (googleError) {
            console.error("google: " + googleError);
            setGoogleResponse("");
        }

        if (robotsError) {
            console.error("robots: " + yandexError);
            setRobotsResponse({ robotsUri: "", yandex: [], google: [] });
        }

        if (headersError) {
            console.error("headers: ", headersError);
            setHeadersResponse({ headers: [] });
        }
    };

    return (
        <div className={classes.search}>
            <div className={classes.prompt}>
                <p className={classes.promptText}>
                    Введите URL-адрес страницы для того, чтобы проверить её индексацию.
                </p>
            </div>
            <Stack direction="row" spacing={2}>
                <TextField
                    fullWidth
                    color="primary"
                    label="https://www.example.com"
                    variant="outlined" size="small"
                    value={inputUrl}
                    onChange={e => setInputUrl(e.target.value)}
                />
                <Button variant="contained" onClick={search}>Проверить</Button>
            </Stack>
            {!showResult && (<Info />)}
            {showResult &&
                (<SearchResult
                    url={url}
                    googleResponse={googleResponse}
                    yandexResponse={yandexResponse}
                    isYandexResponseLoading={isYandexResponseLoading}
                    isGoogleResponseLoading={isGoogleResponseLoading}
                    robotsResponse={robotsResponse}
                    headersResponse={headersResponse}
                    robotsError={robotsError}
                    headersError={headersError}
                />)}
        </div>
    );
}

export default Search;