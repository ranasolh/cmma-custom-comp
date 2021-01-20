import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaInputComponent } from './ca-input.component';

describe('CaInputComponent', () => {
  let component: CaInputComponent;
  let fixture: ComponentFixture<CaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
