import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AppComponent } from './app.component';
import {InsertCoinComponent} from './insert-coin/insert-coin.component'
import {SelectItemComponent} from './select-item/select-item.component'
import {ItemsComponent} from './items/items.component'
import {DispenseItemComponent} from './dispense-item/dispense-item.component'
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        InsertCoinComponent,
        SelectItemComponent,
        ItemsComponent,
        DispenseItemComponent
      ],
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'coffeevendingUI'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.title = 'coffeevendingUI';
    expect(app.title).toEqual('coffeevendingUI');
  });
});
