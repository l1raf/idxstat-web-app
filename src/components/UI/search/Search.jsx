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

    const [fetchYandexResponse, isYandexResponseLoading, yandexError] = useFetchingAsync(async () => {
        const response = await IndexingService.getYandexIndexing(inputUrl);
        setYandexResponse(response.totalSearchResults);
    });

    const [fetchGoogleResponse, isGoogleResponseLoading, googleError] = useFetchingAsync(async () => {
        const response = await IndexingService.getGoogleIndexing(inputUrl);
        setGoogleResponse(response.totalSearchResults);
    });

    const [fetchRobotsResponse, , robotsError] = useFetchingAsync(async () => {
        const response = await RobotsService.getRobotsInfo(inputUrl)
        setRobotsResponse(response);
    });

    const search = () => {
        if (!inputUrl) {
            return;
        }

        setUrl(inputUrl);
        setShowResult(true);
        fetchYandexResponse();
        fetchGoogleResponse();
        fetchRobotsResponse();

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
    };

    return (
        <div className={classes.search}>
            <div className={classes.prompt}>
                <p className={classes.promptText}>
                    Enter a URL in our Index Checker Tool and check its index status
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
                <Button variant="contained" onClick={search}>Check</Button>
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
                />)}
        </div>
    );
}

export default Search;