import { observable, action } from 'mobx';

// 引入mobx

class Selectvalue {
  @observable weekvalue: string = ""
  @observable typevalue: string = ""
  @observable subjectvalue: string = ""
  @action selectvalue(value: any): void {
    let { week, type, subject } = value
    this.weekvalue = week;
    this.typevalue = type;
    this.subjectvalue = subject
  }
}

export default Selectvalue;