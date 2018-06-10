import data from '../public/data/contacts.json';

export default class GetJson{

    constructor(JsonData) {
        this.JsonData = JsonData;
    }

    GetJsonData() {
        this.JsonData  = data;
        return this.JsonData;
      }
}
