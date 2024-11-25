import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserStatus } from '../../model/user.model';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectOption, SelectOptionsFactory } from '@fmr-users/libs/shared-ui';

@Component({
  selector: 'fmr-user-form-dlg',
  templateUrl: './user-form-dlg.component.html',
  styleUrls: ['./user-form-dlg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormDlgComponent implements OnInit {
  formGroup!: FormGroup;
  statusOptions!: SelectOption[];
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private config: DynamicDialogConfig,
    public dlgRef: DynamicDialogRef
  ) {
    this.user = this.config.data?.user;
  }

  ngOnInit(): void {
    this.initOptions();
    this.initForm();
    if (this.user) {
      this.patchForm();
    }
  }

  initOptions(): void {
    this.statusOptions = SelectOptionsFactory.createFromArray(
      Object.values(UserStatus).map(st => ({
        name: st,
        id: st
      })));
  }

  initForm(): void {
    this.formGroup = this.formBuilder.group<Partial<User>>({
      id: undefined,
      image: '',
      name: '',
      status: UserStatus.ONLINE
    });

    /*
     * By seperating the form creation from the validation assignment,
     * we can leverage the typed form in order to ensure that the model of the form
     * is identical to the model of the requst
     */

    Object.keys(this.formGroup.controls).forEach(key => {
      this.formGroup.get(key)?.setValidators(Validators.required);
    });
  }

  patchForm(): void {
    this.formGroup.patchValue(this.user);
    this.formGroup.get('id')?.disable();
    this.formGroup.get('id')?.clearValidators();
  }

  save(): void {
    this.dlgRef.close({
      ...this.user,
      ...this.formGroup.value
    });
  }
}
