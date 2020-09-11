import { IBalance } from "../interfaces/IBalance";

export class Balance implements IBalance {
  public disponivel: number;
  public receber: number;

  constructor(props: Balance) {
    Object.assign(this, props);
  }
}