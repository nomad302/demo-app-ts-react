import { Entry, EntryCollection } from "contentful";

import Contentful from "contentful/Contentful";
import { IPost } from "post/Post";

export default class PostsDataSource {
    public static async getPostContent(): Promise<IPost> {
        try {
            const response: EntryCollection<IPost> = await Contentful.client.getEntries({
                content_type: "post"
            });
            const result: (Entry<IPost>)[] = response.items;
            const resultRecordIndex: number = 0;
            const fields: IPost = result[resultRecordIndex].fields;

            return fields;

        } catch (error) {
            return null;
        }
    }
}
