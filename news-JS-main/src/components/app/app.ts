import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import FindNews from '../view/findNews';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {
        new FindNews();
        const sources: HTMLDivElement | null = document.querySelector('.sources');
        if (sources) {
            sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
            this.controller.getSources((data) => this.view.drawSources(data));
        }
    }
}

export default App;
