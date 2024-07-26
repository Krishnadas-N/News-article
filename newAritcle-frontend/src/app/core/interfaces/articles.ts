export interface Articles {
    source: Source;
    author: string;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: Date;
    content: string| null
}

interface Source{
  id:string;
   name:string
}
