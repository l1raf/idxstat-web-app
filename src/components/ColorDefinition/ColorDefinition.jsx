import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import classes from "./ColorDefinition.module.css";

const ColorDefinition = () => {
    return (
        <div className={classes.colorDefinition}>
            <div className={classes.container}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Color</TableCell>
                            <TableCell>Definition</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <span className={classes.dot} style={{ backgroundColor: "#0307fb" }} />
                            </TableCell>
                            <TableCell>
                                <code>
                                    &lt;noindex&gt;
                                </code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span className={classes.dot} style={{ backgroundColor: "#03defb" }} />
                            </TableCell>
                            <TableCell>
                                <code>
                                    nofollow links
                                </code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span className={classes.dot} style={{ backgroundColor: "#fb0303" }} />
                            </TableCell>
                            <TableCell>
                                <code>
                                    &lt;meta name="robots" content="noindex,nofollow" /&gt;
                                </code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span className={classes.dot} style={{ backgroundColor: "#ff6868" }} />
                            </TableCell>
                            <TableCell>
                                <code>
                                    &lt;meta name="robots" content="noindex" /&gt;
                                </code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span className={classes.dot} style={{ backgroundColor: "#ffc1c1" }} />
                            </TableCell>
                            <TableCell>
                                <code>
                                    &lt;meta name="robots" content="nofollow" /&gt;
                                </code>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default ColorDefinition;