import React from "react";
import classes from "./ColorDefinition.module.css";

const ColorDefinition = () => {
    return (
        <div className={classes.colorDefinition}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Color</th>
                        <th>Definition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className={classes.dot} style={{ backgroundColor: "#0307fb" }} />
                        </td>
                        <td>
                            <code>
                                &lt;noindex&gt;
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className={classes.dot} style={{ backgroundColor: "#03defb" }} />
                        </td>
                        <td>
                            <code>
                                nofollow links
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className={classes.dot} style={{ backgroundColor: "#fb0303" }} />
                        </td>
                        <td>
                            <code>
                                &lt;meta name="robots" content="noindex,nofollow" /&gt;
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className={classes.dot} style={{ backgroundColor: "#ff6868" }} />
                        </td>
                        <td>
                            <code>
                                &lt;meta name="robots" content="noindex" /&gt;
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className={classes.dot} style={{ backgroundColor: "#ffc1c1" }} />
                        </td>
                        <td>
                            <code>
                                &lt;meta name="robots" content="nofollow" /&gt;
                            </code>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ColorDefinition;