import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFaceComponent } from './image-face.component';

describe('ImageFaceComponent', () => {
  let component: ImageFaceComponent;
  let fixture: ComponentFixture<ImageFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageFaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
