import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager, ToastOptions, Toast } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToastrService {

  constructor(
    public toastr: ToastsManager,
    private options: ToastOptions,
    private customOptions: ToastOptions
  ) {
    this.options.positionClass = 'toast-bottom-right';
  }

  info(message: string, title?: string) {
    title = title || 'Info';
    this.toastr.info(message, title);
  }

  success(message: string, title?: string) {
    title = title || 'Success';
    this.toastr.success(message, title);
  }

  warning(message: string, title?: string) {
    title = title || 'Warning';
    this.toastr.warning(message, title);
  }

  error(error: any, title?: string) {
    let message = typeof error === typeof Error ? error.message : error;
    title = title || 'Error';
    this.toastr.error(message, title);
  }

  custom(message: string, title?: string) {
  }


}
