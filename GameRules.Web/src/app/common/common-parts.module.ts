import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseService } from './base.service';
import { LoaderService } from './loader.service';
import { PaginationService } from './pagination.service';
import { ToastrService } from './toastr.service';
import { UtilityService } from './utility.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToastrService,
    UtilityService,
    BaseService,
    LoaderService,
    PaginationService
  ],
  providers: []

})
export class CommonPartsModule { }
