import { Typography } from "@mui/material";
import React from "react";

const Info = () => {
    return (
        <div style={{ marginTop: "16px" }}>
            <Typography style={{ textAlign: "center", margin: "40px", marginTop: "60px", fontWeight: "bold" }} variant="h4">
                What is Index Checker?
            </Typography>
            <Typography variant="body1" textAlign="left">
                This Index Checker tool is extremely useful for many website owners and webmasters because a quick
                indexing test can tell you how if your web page has been indexed by Google and Yandex.
            </Typography>
            <Typography variant="body1" textAlign="left">
                Simply enter the URL that you want to check in the space provided and click on the “Check” button,
                and then the tool will process your request. It will generate the result in just a few seconds which
                determines if the URL is indexed by google and yandex or not.
            </Typography>
            <Typography style={{ textAlign: "center", margin: "40px", marginTop: "60px", fontWeight: "bold" }} variant="h4">
                What does Google index mean?
            </Typography>
            <Typography variant="body1" textAlign="left">
                Google continuously visits millions of websites and creates an index for each website that gets its interest.
                However, it may not index every site that it visits. If Google does not find keywords, names, or topics
                that are of interest, it will likely not index it.
            </Typography>
            <Typography variant="body1" textAlign="left">
                This is the reason why many website owners, webmasters, SEO professionals worry about Google indexing
                their websites. Because no one knows except Google how it operates and the measures it sets for
                indexing web pages. All we know is that the three aspects that Google usually looks for and takes
                into account when indexing a web page are relevance of content, authority, and traffic.
            </Typography>
            <Typography variant="body1" textAlign="left">
                Also, there is no definite time as to when Google will visit a particular site or if it will choose
                to index it. That is why it is important for a website owner to make sure that all issues on your
                web pages are fixed and ready for search engine optimization. To help you identify which pages on
                your website are not yet indexed by Google, this Google site index checker tool will do its job for you.
            </Typography>
            <Typography variant="body1" textAlign="left">
                If your website is not yet indexed, don't worry because Google works non-stop in checking and
                indexing websites. You may want to focus on improving the content on your website and increasing
                your traffic because as traffic builds up, your website also gains relevance and authority which
                will then make Google notice it and start ranking it. Just keep checking the Google Indexing status
                using this Google index checker tool and work on getting a better performance for your website.
                This may usually take time to gain more organic traffic, especially for newly launched websites.
            </Typography>
            <Typography variant="body1" textAlign="left">
                Improving your links can also help you, you must use genuine links only. Do not go for paid
                link farms as they can do more harm than good to your website. Once your website has been indexed
                by Google, you should work hard to maintain it. You can achieve this by always updating your website
                so that it is always fresh and you should also make sure that you retain its relevance and authority
                so it will get a good position in page ranking.
            </Typography>
        </div>
    );
}

export default Info;