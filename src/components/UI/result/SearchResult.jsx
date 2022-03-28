import React from "react";
import IndexingService from "../../../API/IndexingService";
import IndexingResult from "./IndexingResult/IndexingResult";
import PageView from "./PageView/PageView";
import RobotsResult from "./RobotsResult/RobotsResult";
import classes from "./SearchResult.module.css";

const SearchResult = ({ url, googleResponse, yandexResponse,
    isYandexResponseLoading, isGoogleResponseLoading, robotsResponse }) => {

    const webPageUrl = IndexingService.getSource(url);

    return (
        <div className={classes.searchResult}>
            <div className={classes.tableContainer}>
                <IndexingResult
                    isGoogleResponseLoading={isGoogleResponseLoading}
                    isYandexResponseLoading={isYandexResponseLoading}
                    yandexResponse={yandexResponse}
                    googleResponse={googleResponse}
                    url={url}
                />
            </div>
            {(robotsResponse && (robotsResponse.yandex.length > 0 || robotsResponse.google.length > 0))
                && (<RobotsResult robotsResponse={robotsResponse} />)}
            {(googleResponse || yandexResponse) &&
                (<PageView
                    webPageUrl={webPageUrl}
                    isGoogleResponseLoading={isGoogleResponseLoading}
                    isYandexResponseLoading={isYandexResponseLoading}
                    googleResponse={googleResponse}
                    yandexResponse={yandexResponse}
                />)}
        </div>
    );
}

export default SearchResult;