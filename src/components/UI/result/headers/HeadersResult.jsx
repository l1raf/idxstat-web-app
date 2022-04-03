import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React from "react";
import classes from "./HeadersResult.module.css";

const HeadersResult = ({ headersResponse }) => {
    return (
        <div className={classes.headersResult}>
            <Typography sx={{ margin: 2, fontSize: "12pt" }}>
                HTTP-заголовки X-Robots-Tag
            </Typography>
            <div className={classes.tableContainer}>
                <TableContainer sx={{ maxHeight: 200 }}>
                    <Table size="small" aria-label="a dense table" className={classes.table}>
                        <TableBody>
                            {headersResponse.headers.map((header, index) => (
                                <TableRow key={index}>
                                    <TableCell>{header}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default HeadersResult;