import React from "react";
import classes from "./RobotsResult.module.css";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const RobotsResult = ({ robotsResponse }) => {

    function createData() {
        let rows = [];

        robotsResponse.yandex.forEach((element, index) => {
            rows[index] = { ...rows[index], yandex: element }
        });

        robotsResponse.google.forEach((element, index) => {
            rows[index] = { ...rows[index], google: element }
        });

        return rows;
    }

    const rows = createData();

    return (
        <div className={classes.robotsResult}>
            <Typography sx={{ margin: 2, fontSize: "12pt" }}>
                Запрещенные для основных роботов поисковых систем страницы и разделы из файла robots.txt, 
                найденного <a href={robotsResponse.robotsUri} target="_blank" rel="noopener noreferrer">здесь</a>.
            </Typography>
            <div className={classes.tableContainer}>
                <TableContainer sx={{ maxHeight: 256 }}>
                    <Table sx={{ minWidth: 650, maxHeight: 440 }} size="small" aria-label="a dense table" className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Yandex</TableCell>
                                <TableCell>GoogleBot</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.yandex}</TableCell>
                                    <TableCell>{row.google}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default RobotsResult;