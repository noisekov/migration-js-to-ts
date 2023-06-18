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

export interface IApiSourcesData {
    articles: INews[];
    status: string;
    totalResults: number;
}

export interface IApiNewsData {
    sources: ISources[];
    status: string;
}

export interface IOptions {
    sources: string;
}

export interface ILoaderOptions {
    apiKey: string;
}

export type UrlOptions = Options & ILoaderOptions;

export type Options = Partial<IOptions> | undefined;

export enum Endpoint {
    EVERYTHING = 'everything',
    SOURCES = 'sources',
}

export type dataSourcesOrNews = (data: object) => void;

export type apiSourcesCallback = (data?: IApiSourcesData) => void;

export type apiNewsCallback = (data?: IApiNewsData) => void;

export type typeMethod = 'GET' | 'POST';
