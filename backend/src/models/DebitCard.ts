import { Card } from "./Card";

export class DebitCard extends Card {
  constructor() {
    super();
    this.taxa = 2;
    this.prazo = 0;
  }
}