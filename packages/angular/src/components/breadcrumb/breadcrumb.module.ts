import { BreadcrumbItemDirective } from '@/app/breadcrumb/breadcrumb-item.directive'
import { BreadcrumbSeparatorDirective } from '@/app/breadcrumb/breadcrumb-separator.directive'
import { BreadcrumbDirective } from '@/app/breadcrumb/breadcrumb.directive'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ChevronRight, LucideAngularModule } from 'lucide-angular'

@NgModule({
  declarations: [BreadcrumbDirective, BreadcrumbItemDirective, BreadcrumbSeparatorDirective],
  imports: [CommonModule, LucideAngularModule.pick({ ChevronRight })],
  exports: [BreadcrumbDirective, BreadcrumbItemDirective, BreadcrumbSeparatorDirective]
})
export class BreadcrumbModule {}
