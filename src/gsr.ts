/// <reference path="../node_modules/@types/jquery/index.d.ts" />

class GoogleSheetsReader {

    private isUrlFetched: boolean = false;
    private parsableContents: JQuery<HTMLElement>;
    
    constructor(url: string) {
        this.isUrlFetched = false;
        $.get(url, (data) => {
            this.parsableContents = $(data);
            this.isUrlFetched = true;
        });
    }

    private parseData() {
        var tbody = $("tbody", this.parsableContents);
        console.log(tbody);
    }
}
