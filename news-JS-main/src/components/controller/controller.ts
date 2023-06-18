import AppLoader from './appLoader';
import { apiSourcesCallback, apiNewsCallback, Endpoint } from '../../types/types';

class AppController extends AppLoader {
    public getSources(callback: apiNewsCallback): void {
        super.getResp(
            {
                endpoint: Endpoint.SOURCES,
            },
            callback
        );
    }

    public getNews(e: Event, callback: apiSourcesCallback): void {
        let target: EventTarget | null = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target && target instanceof HTMLElement) {
                if (target.classList.contains('source__item')) {
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
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;
