import './sources.css';
import { ISources } from '../../../types/types';

class Sources {
    public draw(data: ISources[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp) {
                const sourceClone = sourceItemTemp.content.cloneNode(true);

                if (sourceClone instanceof DocumentFragment) {
                    const itemName: HTMLSpanElement | null = sourceClone.querySelector('.source__item-name');
                    const sourceItem: HTMLSpanElement | null = sourceClone.querySelector('.source__item');
                    if (itemName) {
                        itemName.textContent = item.name;
                        if (sourceItem) {
                            sourceItem.setAttribute('data-source-id', item.id);
                            fragment.append(sourceClone);
                        }
                    }
                }
            }
        });

        const sources: HTMLDivElement | null = document.querySelector('.sources');
        if (sources) {
            sources.append(fragment);
        }
    }
}

export default Sources;
