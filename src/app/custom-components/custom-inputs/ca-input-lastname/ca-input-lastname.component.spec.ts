import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaInputLastnameComponent } from './ca-input-lastname.component';

describe('CaInputLastnameComponent', () => {
  let component: CaInputLastnameComponent;
  let fixture: ComponentFixture<CaInputLastnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaInputLastnameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaInputLastnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
