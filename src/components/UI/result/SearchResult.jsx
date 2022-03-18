import React from "react";
import IndexingService from "../../../API/IndexingService";
import Loader from "../loader/Loader";
import PageView from "./PageView/PageView";
import classes from "./SearchResult.module.css";

const SearchResult = ({ url, googleResponse, yandexResponse,
    isYandexResponseLoading, isGoogleResponseLoading }) => {

    const webPageUrl = IndexingService.getSource(url);

    return (
        <div className={classes.searchResult}>
            <div className={classes.tableContainer}>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th>Страница</th>
                            <th>Яндекс</th>
                            <th>Google</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{url}</td>
                            <td>{isYandexResponseLoading
                                ? <Loader style={{ height: "20px", width: "20px" }} />
                                : yandexResponse}
                            </td>
                            <td>{isGoogleResponseLoading
                                ? <Loader style={{ height: "20px", width: "20px" }} />
                                : googleResponse}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {(googleResponse || yandexResponse) &&
                (<PageView
                    webPageUrl={webPageUrl}
                    isGoogleResponseLoading={isGoogleResponseLoading}
                    isYandexResponseLoading={isYandexResponseLoading}
                    googleResponse={googleResponse}
                    yandexResponse={yandexResponse} />)}
        </div>
    );
}

export default SearchResult;