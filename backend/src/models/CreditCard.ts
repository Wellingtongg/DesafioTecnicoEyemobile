import { Card } from "./Card";

export class CreditCard extends Card {
  constructor() {
    super();
    this.taxa = 3;
    this.prazo = 30;
  }
}