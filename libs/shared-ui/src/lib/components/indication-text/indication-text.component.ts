import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fmr-indication-text',
  templateUrl: './indication-text.component.html',
  styleUrls: ['./indication-text.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndicationTextComponent {
  @Input() indication: 'success' | 'warning' | 'danger' | 'info' = 'info';
  @Input() customIcon?: string;
  @Input() bold?: string = '';
  @Input() regular?: string = '';

  get icon(): string {
    if (this.customIcon) {
      return this.customIcon;
    }
    switch (this.indication) {
      case 'success':
        return 'pi pi-check-circle';
      case 'warning':
        return 'pi pi-info-circle';
      case 'danger':
        return 'pi pi-times-circle';
      default:
        return 'pi pi-info-circle';
    }
  }
}
