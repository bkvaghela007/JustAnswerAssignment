import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators';
import { Subject} from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';
  private selectedItem: any;
  subject: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  get(): Observable<Response> {
    return this.http.get(this.apiUrl).pipe(
      map((res: Response) => res)
    );
  }

  onItemsRetrieved(callback: any): void {
    this.get().subscribe(callback);
  }

  getSelectedItem(): any {
    return this.selectedItem;
  }

  setSelectedItem(item: any): void {
    this.selectedItem = item;
  }

  put(body: any): Observable<Response> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const updateUrl = `${this.apiUrl}/${this.selectedItem.id}`;
    return this.http.put(updateUrl, (body), { headers }).pipe(
      map((res: Response) => res)
    )
  }

  dispenseItem(callback: any): void {
    this.selectedItem.remaining -= 1;
    this.put(this.selectedItem).subscribe(callback);
  }

  hasSufficientBalance(currentBalance: number): boolean {
    if (!this.selectedItem) return false;
    const hasSufficientBalance = (currentBalance >= this.selectedItem.cost);
    return hasSufficientBalance;
  }

  hasRemaining(): boolean {
    return this.selectedItem && this.selectedItem.remaining > 0;
  }

}
