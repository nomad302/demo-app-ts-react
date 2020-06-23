import { Entry, EntryCollection } from "contentful";

import Contentful from "contentful/Contentful";
import { IPost } from "post/Post";

export default class PostsDataSource {
    public static async getPostContent(): Promise<IPost> {
        try {
            const response: EntryCollection<IPost> = await Contentful.client.getEntries({
                sysId: "post"
            });

        } catch (error) {
            return null;
        }
    }
}
