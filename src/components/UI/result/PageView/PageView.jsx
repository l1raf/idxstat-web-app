import { Button, Collapse, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import IndexingService from "../../../../API/IndexingService";
import ColorDefinition from "../../../ColorDefinition/ColorDefinition";
import Loader from "../../loader/Loader";
import classes from "./PageView.module.css";

const PageView = ({ webPageUrl, isGoogleResponseLoading,
    isYandexResponseLoading, googleResponse, yandexResponse }) => {

    const [isPageLoading, setIsPageLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [showColorDefText, setShowText] = useState("Show color defenition");
    const yandexUrl = IndexingService.getSourceForYandex(webPageUrl);
    const googleUrl = IndexingService.getSourceForGoogle(webPageUrl);
    const [engine, setEngine] = useState("yandex");

    const pageLoaded = () => {
        setIsPageLoading(false);
    };

    const switchUrl = (event, newEngine) => {
        setEngine(newEngine);
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
            <div style={{ marginTop: "32px" }}>
                <ToggleButtonGroup
                    color="primary"
                    value={engine}
                    exclusive
                    onChange={switchUrl}>
                    <ToggleButton value="yandex">Yandex</ToggleButton>
                    <ToggleButton value="google">Google</ToggleButton>
                </ToggleButtonGroup>
                {(isPageLoading && ((!isYandexResponseLoading && yandexResponse) || (!isGoogleResponseLoading && googleResponse))) ? (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
                        <Loader style={{ height: "50px", width: "50px" }} />
                    </div>
                ) : null}
                <iframe
                    style={{ marginTop: "32px" }}
                    title="web page"
                    className={classes.searchResultIframe}
                    src={engine === "yandex" ? yandexUrl : googleUrl}
                    onLoad={pageLoaded} />
            </div>
        </div>
    );
}

export default PageView;