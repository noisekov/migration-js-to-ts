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

export type Options = Partial<IOptions> | undefined;

export enum Endpoint {
    EVERYTHING = 'everything',
    SOURCES = 'sources',
}

export type simpleCallback = (data: string) => void;

export type apiSourcesCallback = (data?: IApiSourcesData) => void;

export type apiNewsCallback = (data?: IApiNewsData) => void;
