export const config = { runtime: 'node' }

export default function Article2() {
    console.log('Article2');
      return (
         <div className="flex h-screen items-center justify-center">
         <div className="flex flex-col items-center gap-16">
             <header className="flex flex-col items-center gap-9">
             <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
                 Read this article.
             </h1>
             </header>
         </div>
         </div>
     );
    }
