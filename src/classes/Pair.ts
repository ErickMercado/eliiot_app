export default class Pair {

    public key : string = '';
    public value? : any;

    constructor( key : string, value? : any ) {
        this.key = key;
        this.value = value;
    }
}