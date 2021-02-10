import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaSwitcherLanguagesComponent } from './ca-switcher-languages.component';

describe('CaSwitcherLanguagesComponent', () => {
  let component: CaSwitcherLanguagesComponent;
  let fixture: ComponentFixture<CaSwitcherLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaSwitcherLanguagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaSwitcherLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
