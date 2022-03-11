import React, { useState } from "react"
import IndexingService from "../../../API/IndexingService"
import Loader from "../loader/Loader"
import classes from "./SearchResult.module.css"

const SearchResult = ({ url, googleResponse, yandexResponse,
    isYandexResponseLoading, isGoogleResponseLoading }) => {

    const [isPageLoading, setIsPageLoading] = useState(true)
    const webPageUrl = IndexingService.getSource(url)

    const pageLoaded = () => {
        setIsPageLoading(false)
    }

    return (
        <div className={classes.searchResult}>
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
            {(isPageLoading && ((!isYandexResponseLoading && yandexResponse) || (!isGoogleResponseLoading && googleResponse))) ? (
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                    <Loader style={{ height: "50px", width: "50px" }} />
                </div>
            ) : null}
            {(googleResponse || yandexResponse) &&
                (<iframe
                    title="web page"
                    className={classes.searchResultIframe}
                    src={webPageUrl}
                    onLoad={pageLoaded} />)}
        </div>
    )
}

export default SearchResult