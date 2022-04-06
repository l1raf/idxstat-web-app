import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import classes from "./ColorDefinition.module.css";
import ColorPickerCircle from "./color/ColorPickerCircle";

const ColorDefinition = ({ noindexColor, setNoindexColor, nofollowColor, setNofollowColor, onChangeColor }) => {

    return (
        <div className={classes.colorDefinition}>
            <div className={classes.container}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Цвет</TableCell>
                            <TableCell>Значение</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <ColorPickerCircle onChangeComplete={onChangeColor} color={noindexColor} setColor={setNoindexColor} />
                            </TableCell>
                            <TableCell>
                                Блоки, выделенные <code>&lt;noindex&gt;</code>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <ColorPickerCircle onChangeComplete={onChangeColor} color={nofollowColor} setColor={setNofollowColor} />
                            </TableCell>
                            <TableCell>
                                <code>
                                    Ссылки, помеченные как nofollow
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