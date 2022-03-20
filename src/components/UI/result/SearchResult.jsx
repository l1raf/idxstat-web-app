import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
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
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Страница</TableCell>
                            <TableCell>Яндекс</TableCell>
                            <TableCell>Google</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{url}</TableCell>
                            <TableCell>
                                {isYandexResponseLoading
                                    ? <Loader style={{ height: "20px", width: "20px" }} />
                                    : yandexResponse}
                            </TableCell>
                            <TableCell>
                                {isGoogleResponseLoading
                                    ? <Loader style={{ height: "20px", width: "20px" }} />
                                    : googleResponse}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
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