import News from './news/news';
import Sources from './sources/sources';
import { IAppViewDrow, IDrawSources } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    protected drawNews(data: IAppViewDrow) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    protected drawSources(data: IDrawSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
