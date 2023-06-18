import { Options, Endpoint, simpleCallback, UrlOptions } from '../../types/types';

class Loader {
    constructor(private readonly baseLink: string, private readonly options: UrlOptions) {}

    protected getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options?: Options },
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Options, endpoint: Endpoint): string {
        const urlOptions: UrlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach((key) => {
            url += `${key[0]}=${key[1]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: Endpoint, callback: simpleCallback, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: string): void => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
