import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaSwitcherCredentialsComponent } from './ca-switcher-credentials.component';

describe('CaSwitcherCredentialsComponent', () => {
  let component: CaSwitcherCredentialsComponent;
  let fixture: ComponentFixture<CaSwitcherCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaSwitcherCredentialsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaSwitcherCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
