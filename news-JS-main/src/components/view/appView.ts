import News from './news/news';
import Sources from './sources/sources';
import { IApiSourcesData, IApiNewsData } from '../../types/types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data?: IApiSourcesData) {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data?: IApiNewsData) {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}
