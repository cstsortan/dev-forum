import { Post } from "./Post";

export interface Tag {
    id: string;
    name: string;
    description: string;
    colour: string;
    latestPost?: Post;
}