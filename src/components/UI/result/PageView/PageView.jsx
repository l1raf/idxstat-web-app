import { Box, Button, Collapse, LinearProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import IndexingService from "../../../../API/IndexingService";
import ColorDefinition from "../../../ColorDefinition/ColorDefinition";
import classes from "./PageView.module.css";

const PageView = ({ webPageUrl, isGoogleResponseLoading,
    isYandexResponseLoading, googleResponse, yandexResponse }) => {

    const [isPageLoading, setIsPageLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [showColorDefText, setShowText] = useState("Показать обозначение цветов");
    const yandexUrl = IndexingService.getSourceForYandex(webPageUrl);
    const googleUrl = IndexingService.getSourceForGoogle(webPageUrl);
    const [engine, setEngine] = useState("yandex");

    async function pageLoaded() {
        setIsPageLoading(false);
    };

    const switchUrl = (event, newEngine) => {
        setIsPageLoading(true);
        setEngine(newEngine);
    };

    function showColorDef() {
        setShow(!show);

        if (show) {
            setShowText("Показать обозначение цветов");
        } else {
            setShowText("Спрятать обозначение цветов");
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
                    <ToggleButton style={{ height: "32px" }} value="yandex">Яндекс</ToggleButton>
                    <ToggleButton style={{ height: "32px" }} value="google">Google</ToggleButton>
                </ToggleButtonGroup>
                {(isPageLoading && ((!isYandexResponseLoading && yandexResponse) || (!isGoogleResponseLoading && googleResponse)))
                    ? (<div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                    </div>
                    ) : null}
                <iframe
                //allow-popups-to-escape-sandbox
                //allow-top-navigation
                    sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
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