import React, { useState } from "react";
import ColorDefinition from "../../../ColorDefinition/ColorDefinition";
import Loader from "../../loader/Loader";
import classes from "./PageView.module.css";

const PageView = ({ webPageUrl, isGoogleResponseLoading,
    isYandexResponseLoading, googleResponse, yandexResponse }) => {

    const [isPageLoading, setIsPageLoading] = useState(true)

    const pageLoaded = () => {
        setIsPageLoading(false)
    }

    return (
        <div className={classes.pageView}>
            <div className={classes.colorDef}>
                <ColorDefinition />
            </div>
            {(isPageLoading && ((!isYandexResponseLoading && yandexResponse) || (!isGoogleResponseLoading && googleResponse))) ? (
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                    <Loader style={{ height: "50px", width: "50px" }} />
                </div>
            ) : null}
            <div>
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