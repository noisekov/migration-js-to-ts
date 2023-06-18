import News from './news/news';
import Sources from './sources/sources';
import { IAppViewDraw, IDrawSources } from '../../types/types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: IAppViewDraw | undefined): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: IDrawSources | undefined): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}
