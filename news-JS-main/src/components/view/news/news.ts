import './news.css';
import { INews } from '../../../types/index';

class News {
    public draw(data: readonly INews[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item: INews, idx: number) => {
            if (newsItemTemp) {
                const newsClone = newsItemTemp.content.cloneNode(true);
                if (newsClone instanceof DocumentFragment) {
                    const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
                    if (newsItem) {
                        if (idx % 2) newsItem.classList.add('alt');
                        const metaPhoto: HTMLDivElement | null = newsClone.querySelector('.news__meta-photo');
                        if (metaPhoto) {
                            metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                            const metaAuthor: HTMLLIElement | null = newsClone.querySelector('.news__meta-author');
                            if (metaAuthor) {
                                metaAuthor.textContent = item.author || item.source.name;
                                const metaDate: HTMLLIElement | null = newsClone.querySelector('.news__meta-date');
                                if (metaDate) {
                                    metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                                    const descriptionTitle: HTMLHeadingElement | null = newsClone.querySelector(
                                        '.news__description-title'
                                    );
                                    const descriptionSource: HTMLHeadingElement | null = newsClone.querySelector(
                                        '.news__description-source'
                                    );
                                    const descriptionContent: HTMLParagraphElement | null = newsClone.querySelector(
                                        '.news__description-content'
                                    );
                                    const readMore: HTMLParagraphElement | null = newsClone.querySelector(
                                        '.news__read-more a'
                                    );
                                    if (descriptionTitle && descriptionSource && descriptionContent && readMore) {
                                        descriptionTitle.textContent = item.title;
                                        descriptionSource.textContent = item.source.name;
                                        descriptionContent.textContent = item.description;
                                        readMore.setAttribute('href', item.url);
                                        fragment.append(newsClone);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        const newsBlock: HTMLDivElement | null = document.querySelector('.news');
        if (newsBlock) {
            newsBlock.innerHTML = '';
            newsBlock.appendChild(fragment);
        }
    }
}

export default News;
