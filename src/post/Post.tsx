import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from "@contentful/rich-text-types";
import { Entry } from "contentful";
import * as React from "react";

import PostDataSource from "datasources/PostsDataSource";
import { IImage } from "model/common/Iimage";

import "post/post.css";

export interface IPost {
    title: string;
    description: string;
    image: Entry<IImage>;
    author: string;
    body:  Document;
    publishedDate: string;
}

interface IState {
    postContents?: IPost;
}

class Post extends React.Component<{}, IState>{
    public state: IState = {};

    public render(): JSX.Element {
        const { postContents } = this.state;
        if (!postContents) {
            return null;
        }

        return (
            <div className="post-container">
                <h1>{postContents.title}</h1>
                <h4>{postContents.description}</h4>
                <img
                    src={postContents.image.fields.file.url}
                    alt={postContents.image.fields.description}
                />
                <section
                        className="blogContent"
                        dangerouslySetInnerHTML={{ __html: documentToHtmlString(postContents.body) }}
                    />
            </div>
        );
    }

    public componentDidMount(): void {
        this.getPostContent();
    }

    private async getPostContent(): Promise<void> {
        const postContents: IPost = await PostDataSource.getPostContent();
        this.setState({ postContents });
    }
}

export default Post;
