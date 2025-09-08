import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Button } from "primeng/button";
import { AccountService } from '../../services/account.service';
import { Account } from '../../model/account';
import { Table, TableModule } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Toolbar } from "primeng/toolbar";
import { FileUpload } from "primeng/fileupload";
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { Tag } from "primeng/tag";
import { Dialog } from "primeng/dialog";
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';

interface ExportColumn {
    title: string;
    dataKey: string;
}
@Component({
  selector: 'app-account.component',
  standalone: true,
  imports: [Toolbar, Button, FileUpload, TableModule, IconField, InputIcon,  FormsModule, ToolbarModule,
  ButtonModule,
  FileUploadModule ],
  templateUrl: './account.component.html',
    providers: [MessageService, ConfirmationService, AccountService],
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit{


    AccountDialog: boolean = false;

    accountList!: Account[];
    account!: Account;

    selectedAccounts!: Account[] | null;
    submitted: boolean = false;

    @ViewChild('dt') dt!: Table;
    exportColumns!: ExportColumn[];

  //inyección
    constructor(private service: AccountService,
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
           // console.log("respuesta:",data);
            data.forEach((item:any) => {
                if (!item.status) {
                    item.status = 'ACTIVE'; // Asigna un valor por defecto si status es undefined
                }else {
                    item.status = item.deleted ? 'INACTIVE' : 'ACTIVE';
                }
            });
            this.accountList = data;
          //  console.log("lista de cuentas:",this.accountList);
            this.cd.markForCheck();
        });
    }

    openNew() {
            this.account = {};
            this.submitted = false;
            this.AccountDialog = true;
        }
    
        editAccount(account: Account) {
        }
    
        deleteSelectedAccounts() {
        }
    
        hideDialog() {
            this.AccountDialog = false;
            this.submitted = false;
        }
    
        deleteAccount(account: Account) {
    
        }
    
        findIndexById(id: number): number {
            let index = -1;
            for (let i = 0; i < this.accountList.length; i++) {
                if (this.accountList[i].id === id) {
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
    
        saveAccount() {
            this.submitted = true;
        }
}
