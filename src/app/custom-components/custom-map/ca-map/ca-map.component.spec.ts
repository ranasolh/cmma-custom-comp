import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaMapComponent } from './ca-map.component';

describe('CaMapComponent', () => {
  let component: CaMapComponent;
  let fixture: ComponentFixture<CaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
