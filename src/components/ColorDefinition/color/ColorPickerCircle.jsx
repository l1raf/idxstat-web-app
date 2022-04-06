import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import { SketchPicker } from "react-color";
import { IconButton } from "@mui/material";
import reactCSS from 'reactcss';

const ColorPickerCircle = ({ color, onChangeComplete, setColor }) => {

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [changed, setChanged] = useState(false);

    const handleColorChange = (color) => {
        setChanged(true);
        setColor(color.hex);
    }

    function handleClick() {
        setDisplayColorPicker(!displayColorPicker);
    }

    function handleClose() {
        if (changed) {
            onChangeComplete();
            setChanged(false);
        }

        setDisplayColorPicker(false);
    }

    const styles = reactCSS({
        'default': {
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });

    return (
        <div>
            <IconButton onClick={handleClick}>
                <CircleIcon sx={{ color: color }} />
            </IconButton>
            {displayColorPicker
                ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={handleClose} />
                    <SketchPicker color={color} onChange={handleColorChange} />
                </div>
                : null}
        </div>
    );
}

export default ColorPickerCircle;