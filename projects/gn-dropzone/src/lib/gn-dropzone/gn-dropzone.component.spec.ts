import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnDropzoneComponent } from './gn-dropzone.component';

describe('GnDropzoneComponent', () => {
  let component: GnDropzoneComponent;
  let fixture: ComponentFixture<GnDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnDropzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
