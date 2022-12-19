import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavLinksComponentComponent } from './fav-links-component.component';

describe('FavLinksComponentComponent', () => {
  let component: FavLinksComponentComponent;
  let fixture: ComponentFixture<FavLinksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavLinksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavLinksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
