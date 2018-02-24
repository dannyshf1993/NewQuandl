export class UnknowndatatwoProvider {

  private Unknowndatatwos: { name: string, data: Array<any>, change: string, database_code: string, open_price:string, volume: number }[] = [];

  addUnknowndatatwos(Unknowndatatwo) {
    this.Unknowndatatwos.push(Unknowndatatwo);

  }

  getUnknowndatatwos() {
    return this.Unknowndatatwos.slice(-1);
  }

}