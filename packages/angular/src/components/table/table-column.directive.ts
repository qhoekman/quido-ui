import { CdkColumnDef } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[puiColumnDef]',
  providers: [{ provide: CdkColumnDef, useExisting: TableColumnDefDirective }],
  standalone: true,
})
export class TableColumnDefDirective extends CdkColumnDef {
  @Input('puiColumnDef')
  override get name(): string {
    return this._name;
  }
  override set name(name: string) {
    this._setNameInput(name);
  }
}
