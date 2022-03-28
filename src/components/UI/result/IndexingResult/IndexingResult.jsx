import React from "react";
import classes from "./IndexingResult.module.css";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Loader from "../../loader/Loader";

const IndexingResult = ({ isYandexResponseLoading, isGoogleResponseLoading, yandexResponse, googleResponse, url }) => {

    return (
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
    );
}

export default IndexingResult;