import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaButtonSubmitComponent } from './ca-button-submit.component';

describe('CaButtonSubmitComponent', () => {
  let component: CaButtonSubmitComponent;
  let fixture: ComponentFixture<CaButtonSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaButtonSubmitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaButtonSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
