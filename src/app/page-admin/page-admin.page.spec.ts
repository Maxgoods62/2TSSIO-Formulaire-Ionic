import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminPage } from './page-admin.page';

describe('PageAdminPage', () => {
  let component: PageAdminPage;
  let fixture: ComponentFixture<PageAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
