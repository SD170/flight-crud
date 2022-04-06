export class Flight {
    public code: number| undefined;

    constructor(
        public carrier: string,
        public source: string,
        public destination: string) {

    }
}
