class Flight {
    public code?:number;
    public carrier:string;
    public source:string;
    public destination:string;
    constructor(carrier:string, source:string, destination:string) {
        this.carrier=carrier;
        this.source=source;
        this.destination=destination;
    }
}

export default Flight;