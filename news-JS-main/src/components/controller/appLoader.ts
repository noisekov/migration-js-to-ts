import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '13306bc845a34e7aba7cb406b1c032b1',
        });
    }
}

export default AppLoader;
