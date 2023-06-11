export interface INews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISources {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface IAppViewDrow {
    articles: INews[];
    status: string;
    totalResults: number;
}

export interface IDrawSources {
    sources: ISources[];
    status: string;
}

export interface IOptions {
    sources: string;
}

export interface ILoaderOptions {
    apiKey: string;
}

export type Options =
    | Partial<{
          sources?: string;
      }>
    | undefined;
