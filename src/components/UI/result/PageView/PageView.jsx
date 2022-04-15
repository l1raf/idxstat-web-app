import { Box, Button, Collapse, LinearProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import IndexingService from "../../../../API/IndexingService";
import ColorDefinition from "../../ColorDefinition/ColorDefinition";
import classes from "./PageView.module.css";

const PageView = ({ webPageUrl }) => {

    const [isPageLoading, setIsPageLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [showColorDefText, setShowText] = useState("Показать обозначение цветов");
    const [noindexColor, setNoindexColor] = useState("#4BFB03");
    const [nofollowColor, setNofollowColor] = useState("#03defb");
    const [engine, setEngine] = useState("yandex");
    const [iframeUrl, setIframeUrl] = useState(IndexingService.getSourceForYandex(webPageUrl, noindexColor, nofollowColor));
    const [random, setRandom] = useState(0);

    async function pageLoaded() {
        setIsPageLoading(false);
    };

    const onChangeColor = () => {
        setIframeUrl(engine === "yandex"
            ? IndexingService.getSourceForYandex(webPageUrl, noindexColor, nofollowColor)
            : IndexingService.getSourceForGoogle(webPageUrl, nofollowColor));
        setIsPageLoading(true);
        setRandom(random + 1);
    };

    const switchUrl = (event, newEngine) => {
        setIsPageLoading(true);
        setEngine(newEngine);
        setIframeUrl(newEngine === "yandex"
            ? IndexingService.getSourceForYandex(webPageUrl, noindexColor, nofollowColor)
            : IndexingService.getSourceForGoogle(webPageUrl, nofollowColor));
        setRandom(random + 1);
    };

    const showColorDef = () => {
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
                    <ColorDefinition
                        noindexColor={noindexColor}
                        nofollowColor={nofollowColor}
                        setNofollowColor={setNofollowColor}
                        setNoindexColor={setNoindexColor}
                        onChangeColor={onChangeColor} />
                </Collapse>
            </div>
            <div style={{ marginTop: "32px" }}>
                <ToggleButtonGroup
                    color="primary"
                    value={engine}
                    exclusive
                    onChange={switchUrl}>
                    <ToggleButton style={{ height: "32px" }} value="yandex" disabled={engine === "yandex"}>Яндекс</ToggleButton>
                    <ToggleButton style={{ height: "32px" }} value="google" disabled={engine === "google"}>Google</ToggleButton>
                </ToggleButtonGroup>
                {isPageLoading
                    ? (<div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                    </div>
                    ) : null}
                <iframe
                    key={random}
                    sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                    style={{ marginTop: "32px" }}
                    title="web page"
                    className={classes.searchResultIframe}
                    src={iframeUrl}
                    onLoad={pageLoaded} />
            </div>
        </div>
    );
}

export default PageView;