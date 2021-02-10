import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaDropdownLanguagesComponent } from './ca-dropdown-languages.component';

describe('CaDropdownLanguagesComponent', () => {
  let component: CaDropdownLanguagesComponent;
  let fixture: ComponentFixture<CaDropdownLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaDropdownLanguagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaDropdownLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
