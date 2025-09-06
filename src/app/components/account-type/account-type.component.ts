
import { AccountTypeService } from '../../services/account-type.service';
import { AccountType } from '../../model/accout-type';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { FileUpload } from 'primeng/fileupload';
import { SelectModule } from 'primeng/select';
import { Tag } from 'primeng/tag';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Table } from 'primeng/table';

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
  selector: 'app-account-type',
  standalone: true,
  imports: [TableModule, Dialog, ButtonModule, SelectModule, ToastModule, ToolbarModule, ConfirmDialog, InputTextModule, TextareaModule, CommonModule, FileUpload, Tag, RadioButton, InputTextModule, FormsModule, InputNumber, IconFieldModule, InputIconModule],
  templateUrl: './account-type.component.html',
  providers: [MessageService, ConfirmationService, AccountTypeService],
  styleUrl: './account-type.component.css'
})
export class AccountTypeComponent implements OnInit{


    AccountTypeDialog: boolean = false;

    accountTypeList!: AccountType[];
    accountType!: AccountType;

    selectedAccountTypes!: AccountType[] | null;
    submitted: boolean = false;

    @ViewChild('dt') dt!: Table;
    exportColumns!: ExportColumn[];

    //inyección
    constructor(private service: AccountTypeService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private cd: ChangeDetectorRef
    ) {}

    exportCSV() {
        this.dt.exportCSV();
    }

    ngOnInit(): void {
    this.loadDemoData();
    }


    loadDemoData() {
        this.service.getAll().subscribe((data) => {
            data.forEach((item:any) => {
                if (!item.status) {
                    item.status = 'ACTIVE'; // Asigna un valor por defecto si status es undefined
                }else {
                    item.status = item.deleted ? 'INACTIVE' : 'ACTIVE';
                }
            });
            this.accountTypeList = data;
            console.log(this.accountTypeList);
            this.cd.markForCheck();
        });
    }

    openNew() {
        this.accountType = {};
        this.submitted = false;
        this.AccountTypeDialog = true;
    }

    editAccountType(accountType: AccountType) {
    }

    deleteSelectedAccountTypes() {
    }

    hideDialog() {
        this.AccountTypeDialog = false;
        this.submitted = false;
    }

    deleteAccountType(accountType: AccountType) {

    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.accountTypeList.length; i++) {
            if (this.accountTypeList[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }


    getSeverity(status: string) {
        //console.log("status", status);
        return 'success';                                       
    }

    saveAccountType() {
        this.submitted = true;
    }

}
