class avgSpeed {
    distanceInput: HTMLInputElement | null;
    timeInput: HTMLInputElement | null;
    avgInput: HTMLInputElement | null;
    calcButton: HTMLInputElement | null;
    average: number;

    constructor() {
        this.startBind();
        this.eventHandler();
    }
    startBind() {
        this.distanceInput = document.querySelector('#distance');
        this.timeInput = document.querySelector('#time');
        this.avgInput = document.querySelector('#avg');
        this.calcButton = document.querySelector('#calcButton');
    }
    eventHandler() {
        this.calcButton?.addEventListener('click', () =>{
            this.onClickStartCalcButton();
        });
    }
    onClickStartCalcButton() {
        console.log('működik')
        if(this.distanceInput && this.timeInput) {
            const distance = Number(this.distanceInput.value);   
            const time = Number(this.timeInput.value);   
            this.average = this.calcavgSpeed(distance, time);
            this.renderResult();
        }
    }
    calcavgSpeed(path: number, time: number):number {
        return path/time;
    }
    renderResult() {
        this.avgInput.value = String(this.average);
    }
}

new avgSpeed();