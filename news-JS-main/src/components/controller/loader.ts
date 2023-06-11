import { ILoaderOptions, Options } from '../../types/types';

class Loader {
    baseLink;
    options;

    constructor(baseLink: string, options: ILoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        { endpoint, options = {} }: { endpoint?: string; options?: Options },
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        if (endpoint) {
            this.load('GET', endpoint, callback, options);
        }
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Options, endpoint: string) {
        const urlOptions: ILoaderOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach((key) => {
            url += `${key[0]}=${key[1]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: (data: string) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: string): void => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
