import { Article } from "~/components/Article";

export const config = { runtime: 'edge' }

export default function BlogArticle3() {
    console.log('BlogArticle');
    return (
       <Article />
    );}
