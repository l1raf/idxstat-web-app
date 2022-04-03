import React from "react";
import classes from "./IndexingResult.module.css";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

const IndexingResult = ({ isYandexResponseLoading, isGoogleResponseLoading, yandexResponse, googleResponse, url }) => {

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Страница</TableCell>
                    <TableCell>Яндекс</TableCell>
                    <TableCell>Google</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell width="60%">{url}</TableCell>
                    <TableCell width="20%">
                        {isYandexResponseLoading
                            ? <CircularProgress style={{ height: "24px", width: "24px" }} />
                            : (yandexResponse ? <DoneIcon sx={{ color: "green" }} /> : <CloseIcon sx={{ color: "red" }} />)}
                    </TableCell>
                    <TableCell width="20%">
                        {isGoogleResponseLoading
                            ? <CircularProgress style={{ height: "24px", width: "24px" }} />
                            : (googleResponse ? <DoneIcon sx={{ color: "green" }} /> : <CloseIcon sx={{ color: "red" }} />)}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

export default IndexingResult;