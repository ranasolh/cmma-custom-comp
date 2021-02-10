import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaAutocompleteCountriesComponent } from './ca-autocomplete-countries.component';

describe('CaAutocompleteCountriesComponent', () => {
  let component: CaAutocompleteCountriesComponent;
  let fixture: ComponentFixture<CaAutocompleteCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaAutocompleteCountriesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaAutocompleteCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
