import { Article } from "~/components/Article";

export const config = { runtime: 'node' }

export default function BlogArticle() {
    console.log('BlogArticle');
    return (
       <Article />
    );}
