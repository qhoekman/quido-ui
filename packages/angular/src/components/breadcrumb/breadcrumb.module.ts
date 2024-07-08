import { BreadcrumbItemDirective } from '@/components/breadcrumb/breadcrumb-item.directive';
import { BreadcrumbSeparatorDirective } from '@/components/breadcrumb/breadcrumb-separator.directive';
import { BreadcrumbDirective } from '@/components/breadcrumb/breadcrumb.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChevronRight, LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [
    BreadcrumbDirective,
    BreadcrumbItemDirective,
    BreadcrumbSeparatorDirective,
  ],
  imports: [CommonModule, LucideAngularModule.pick({ ChevronRight })],
  exports: [
    BreadcrumbDirective,
    BreadcrumbItemDirective,
    BreadcrumbSeparatorDirective,
  ],
})
export class BreadcrumbModule {}
