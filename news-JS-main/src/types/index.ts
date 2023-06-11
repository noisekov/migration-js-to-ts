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
    articles: [
        {
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
    ];
    status: string;
    totalResults: number;
}

export interface IDrawSources {
    sources: [
        {
            category: string;
            country: string;
            description: string;
            id: string;
            language: string;
            name: string;
            url: string;
        }
    ];
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
          // category?: string;
          // language?: string;
      }>
    | undefined;
