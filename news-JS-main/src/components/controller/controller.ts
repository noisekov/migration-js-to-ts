import AppLoader from './appLoader';
import { IAppViewDrow, IDrawSources } from '../../types/types';

class AppController extends AppLoader {
    public getSources(callback: (data?: IDrawSources) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data?: IAppViewDrow) => void): void {
        let target: EventTarget | null = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
            if (target) {
                if (target instanceof HTMLElement) {
                    if (target.classList.contains('source__item')) {
                        const sourceId: string | null = target.getAttribute('data-source-id');
                        if (newsContainer instanceof HTMLElement) {
                            if (sourceId) {
                                if (newsContainer.getAttribute('data-source') !== sourceId) {
                                    newsContainer.setAttribute('data-source', sourceId);
                                    super.getResp(
                                        {
                                            endpoint: 'everything',
                                            options: {
                                                sources: sourceId,
                                            },
                                        },
                                        callback
                                    );
                                }
                            }
                            return;
                        }
                    }
                    target = target.parentNode;
                }
            }
        }
    }
}

export default AppController;
