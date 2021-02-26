import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AlertComponent);
      component = fixture.componentInstance;
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onClick', async(() => {
    spyOn(component, 'onClick');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onClick).toHaveBeenCalled();
    });
  }));

  describe('delete', () => {
    it('should get Success Class', () => {
      expect(component.alertClass('Success')).toEqual('alert alert-dismissable alert alert-success');
    });

    it('should get Warning Class', () => {
      expect(component.alertClass('Warning')).toEqual('alert alert-dismissable alert alert-warning');
    });

    it('should get Error Class', () => {
      expect(component.alertClass('Error')).toEqual('alert alert-dismissable alert alert-danger');
    });
  });

});
