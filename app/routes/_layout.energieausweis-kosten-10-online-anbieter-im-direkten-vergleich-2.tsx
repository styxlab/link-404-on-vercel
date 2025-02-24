import { Article } from "~/components/Article";

export const config = { runtime: 'edge' }

export default function BlogArticle2() {
    console.log('BlogArticle2');
    return (
       <Article />
    );}
