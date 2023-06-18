import AppLoader from './appLoader';
import { IAppViewDraw, IDrawSources, Endpoint } from '../../types/types';

class AppController extends AppLoader {
    public getSources(callback: (data?: IDrawSources) => void): void {
        super.getResp(
            {
                endpoint: Endpoint.SOURCES,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data?: IAppViewDraw) => void): void {
        let target: EventTarget | null = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target && target instanceof HTMLElement && target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (newsContainer instanceof HTMLElement && sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: Endpoint.EVERYTHING,
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
