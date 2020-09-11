import { v4 } from 'uuid';
import { ITransaction } from '../interfaces/ITransaction';
import { DebitCard } from "./DebitCard";
import { CreditCard } from "./CreditCard";
import moment from 'moment';

const workingDays = [false, true, true, true, true, true, false]; // O formato começa no domingo

export class Transaction implements ITransaction {
  public readonly id: string;
  public nsu: string;
  public valor: number;
  public liquido: number;
  public bandeira: 'VISA' | 'MASTERCARD' | 'ELO' | 'AMEX';
  public modalidade: 'credito' | 'debito';
  public horario: Date;
  public disponivel: string;

  constructor(props: Omit<Transaction, 'id' | 'liquido' | 'disponivel'>) {
    this.id = v4();
    Object.assign(this, props);
    this.liquido = this.calculateNetValue();
    this.disponivel = this.calculateAvailability();
  }

  private calculateAvailability(): string {
    let prazo;
    if (this.modalidade === 'debito') {
      prazo = new DebitCard().prazo;
    } else if (this.modalidade === 'credito') {
      prazo = new CreditCard().prazo;
    }

    let availableDate = moment(this.horario).add(prazo, 'days'),
      nextDays = 1;
    for (let i = 1; i <= nextDays; i++) {
      availableDate = moment(this.horario).add(prazo + i, 'days');
      let dayOfWeek = availableDate.day();
      if (!workingDays[dayOfWeek]) {
        // Se não for um dia útil incrementa a quantidade
        nextDays++;
      }
    }
    return availableDate.format('YYYY-MM-DD');
  }

  private calculateNetValue(): number {
    let taxa: number;
    if (this.modalidade === 'debito') {
      taxa = new DebitCard().taxa;
    } else if (this.modalidade === 'credito') {
      taxa = new CreditCard().taxa;
    } else {
      return this.valor;
    }
    return this.roundNumber(this.valor * (1 - (taxa / 100)));
  }

  private roundNumber(number: number): number {
    return Math.round(number * 100) / 100;
  }
}