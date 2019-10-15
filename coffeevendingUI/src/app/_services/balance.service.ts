import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/internal/Observable';
import { Subject} from 'rxjs/internal/Subject';
@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private balance: number = 0;
  private subject: Subject<number> = new Subject<number>();
  private internalbalance:number = 5;
  constructor() { }

  private updateSubject(): void {
    this.subject.next(this.balance);
  }

  setBalance(amount): void {
    this.balance = amount;
    this.updateSubject();
  }

  getBalance(): number {
    return this.balance;
  }

  addBalance(amount): void {
    this.balance += amount;
    this.updateSubject();
  }

  deductBalance(amount): void {
    this.balance -= amount;
    this.updateSubject();
  }

  onBalanceUpdated(callback): void {
    this.subject.asObservable().subscribe(callback);
  }
}
