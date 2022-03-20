import { Button, Collapse } from "@mui/material";
import React, { useState } from "react";
import ColorDefinition from "../../../ColorDefinition/ColorDefinition";
import Loader from "../../loader/Loader";
import classes from "./PageView.module.css";

const PageView = ({ webPageUrl, isGoogleResponseLoading,
    isYandexResponseLoading, googleResponse, yandexResponse }) => {

    const [isPageLoading, setIsPageLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [showColorDefText, setShowText] = useState("Show color defenition")

    const pageLoaded = () => {
        setIsPageLoading(false);
    };

    function showColorDef() {
        setShow(!show);

        if (show) {
            setShowText("Show color defenition");
        } else {
            setShowText("Hide color defenition");
        }
    }

    return (
        <div className={classes.pageView}>
            <div className={classes.colorDef}>
                <Button onClick={showColorDef}>{showColorDefText}</Button>
                <Collapse in={show}>
                    <ColorDefinition />
                </Collapse>
            </div>
            {(isPageLoading && ((!isYandexResponseLoading && yandexResponse) || (!isGoogleResponseLoading && googleResponse))) ? (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
                    <Loader style={{ height: "50px", width: "50px" }} />
                </div>
            ) : null}
            <div style={{ marginTop: "32px" }}>
                <iframe
                    title="web page"
                    className={classes.searchResultIframe}
                    src={webPageUrl}
                    onLoad={pageLoaded} />
            </div>
        </div>
    );
}

export default PageView;