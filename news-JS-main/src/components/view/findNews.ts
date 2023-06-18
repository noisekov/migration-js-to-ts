class FindNews {
    constructor() {
        this.init();
    }

    private init() {
        const inputFind: HTMLInputElement | null = document.querySelector('.sources__find input');
        if (inputFind) {
            const allNews: HTMLDivElement | null = document.querySelector('.sources');
            inputFind.addEventListener('input', () => {
                if (allNews) {
                    [...allNews.children].filter((elem) => {
                        if (elem instanceof HTMLDivElement) {
                            elem.style.display = 'none';
                            const letter = inputFind.value.length;
                            if (elem.children[0] instanceof HTMLSpanElement) {
                                const letterFindWord = elem.children[0].innerText.split('').splice(0, letter).join('');
                                if (inputFind.value.toLowerCase() === letterFindWord.toLowerCase()) {
                                    elem.style.display = '';
                                }
                            }
                        }
                    });
                }
            });
        }
    }
}
export default FindNews;
