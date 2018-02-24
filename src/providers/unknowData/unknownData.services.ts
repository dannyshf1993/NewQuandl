export class UnknownDataService {

    unknownDatas: { name: string, data: Array<any>, change: number,  database_code: string, volume: number, open_price: number}[] = [];

    addUnknownData(unknowData) {
        this.unknownDatas.push(unknowData);
    }

    getUnknownDatas() {
        //to get the last one that customer clicks
        return this.unknownDatas.slice(-1);
    }
}