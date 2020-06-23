import { ContentfulClientApi, createClient } from "contentful";

class Contentful {
    public client: ContentfulClientApi;

    constructor() {
        const SPACE_ID: string = "e2dl5cqo8zvz";
        const ACCESS_TOKEN: string = "tsLdBs081kgP6NQUOVmqSvMsjy8DaNYuisLNB2xjpIU";

        this.client = createClient({
            accessToken: ACCESS_TOKEN,
            resolveLinks: true,
            space: SPACE_ID
        });
    }
}

export default new Contentful();
