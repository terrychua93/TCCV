import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoriteTechComponent } from './my-favorite-tech.component';

describe('MyFavoriteTechComponent', () => {
  let component: MyFavoriteTechComponent;
  let fixture: ComponentFixture<MyFavoriteTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFavoriteTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFavoriteTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
