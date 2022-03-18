import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import IndexingService from "../../../API/IndexingService";
import { useFetchingAsync } from "../../../hooks/useFetching";
import Info from "../info/Info";
import SearchResult from "../result/SearchResult";
import classes from "./Search.module.css";

const Search = ({ placeholder }) => {

    const [inputUrl, setInputUrl] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [url, setUrl] = useState("");

    const [googleResponse, setGoogleResponse] = useState("");
    const [yandexResponse, setYandexResponse] = useState("");

    const [fetchYandexResponse, isYandexResponseLoading, yandexError] = useFetchingAsync(async () => {
        await new Promise(r => setTimeout(r, 2000)); //TODO: remove
        const response = await IndexingService.getYandexResponse(inputUrl);
        setYandexResponse(response.totalSearchResults);
    });

    const [fetchGoogleResponse, isGoogleResponseLoading, googleError] = useFetchingAsync(async () => {
        await new Promise(r => setTimeout(r, 2000)); //TODO: remove
        const response = await IndexingService.getGoogleResponse(inputUrl);
        setGoogleResponse(response.totalSearchResults);
    });

    const search = () => {
        if (!inputUrl) {
            return;
        }

        setUrl(inputUrl);
        setShowResult(true);
        fetchYandexResponse();
        fetchGoogleResponse();

        if (yandexError) {
            console.error("yandex: " + yandexError);
            setYandexResponse("");
        }

        if (googleError) {
            console.error("google: " + googleError);
            setGoogleResponse("");
        }
    };

    return (
        <div className={classes.search}>
            <Stack direction="row" spacing={2}>
                <TextField
                    fullWidth
                    color="primary"
                    label="https://www.example.com"
                    variant="outlined" size="small"
                    value={inputUrl}
                    onChange={e => setInputUrl(e.target.value)} />
                <Button variant="contained" onClick={search}>Check</Button>
            </Stack>
            {!showResult && (<Info />)}
            {showResult &&
                (<SearchResult
                    url={url}
                    googleResponse={googleResponse}
                    yandexResponse={yandexResponse}
                    isYandexResponseLoading={isYandexResponseLoading}
                    isGoogleResponseLoading={isGoogleResponseLoading} />)}
        </div>
    );
}

export default Search;