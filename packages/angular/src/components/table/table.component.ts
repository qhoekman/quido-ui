import { _DisposeViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY } from '@angular/cdk/collections';
import {
  CDK_TABLE,
  CdkTable,
  DataRowOutlet,
  FooterRowOutlet,
  HeaderRowOutlet,
  NoDataRowOutlet,
} from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[pui-table]',
  standalone: true,
  host: {
    'data-testid': 'pui-table',
  },
  template: `
    <ng-content select="caption" />
    <ng-content select="colgroup, col" />
    <thead role="rowgroup">
      <ng-container headerRowOutlet />
    </thead>
    <tbody role="rowgroup">
      <ng-container rowOutlet />
      <ng-container noDataRowOutlet />
    </tbody>
    <tfoot role="rowgroup">
      <ng-container footerRowOutlet />
    </tfoot>
  `,
  styles: [
    `
      /* stylelint-disable selector-pseudo-element-no-unknown */
      :host {
        width: 100%;
        caption-side: bottom;
        font-size: var(--font-size-sm);
        line-height: var(--line-height-sm);
        text-indent: 0;
        border-collapse: collapse;
      }

      :host thead ::ng-deep tr,
      :host tbody ::ng-deep tr:not(:last-child),
      :host tfoot ::ng-deep tr:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
      }

      :host tfoot {
        border-top: 1px solid var(--color-border);
        background-color: hsl(from var(--color-muted) h s l / 50%);
        font-weight: var(--font-weight-medium);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
  providers: [
    { provide: CdkTable, useExisting: TableComponent },
    { provide: CDK_TABLE, useExisting: TableComponent },
    // TODO: missing in angular 20
    // { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
    {
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _DisposeViewRepeaterStrategy,
    },
  ],
})
export class TableComponent<T> extends CdkTable<T> {}
