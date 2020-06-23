import * as React from "react";

export interface IPost {
    userName: string;
    lang: string;
}
const Post: React.FunctionComponent<{}> = (): JSX.Element => (
    <h2>Posts</h2>
);

export default Post;
