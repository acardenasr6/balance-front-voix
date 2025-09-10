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
import { MovementType } from '../../model/movement-type';
import { MovementTypeService } from '../../services/movementType.service';

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
  selector: 'app-movement-type.component',
    standalone: true,
  imports: [TableModule,ButtonModule, SelectModule, ToastModule, ToolbarModule,  InputTextModule, TextareaModule, CommonModule,  Tag,  InputTextModule, FormsModule, IconFieldModule, InputIconModule],
  templateUrl: './movement-type.component.html',
    providers: [MessageService, ConfirmationService, MovementTypeService],
  
  styleUrl: './movement-type.component.css'
})
export class MovementTypeComponent implements OnInit{

 MovementTypeDialog: boolean = false;

    movementTypeList!: MovementType[];
    movementType!: MovementType;

    selectedMovementTypes!: MovementType[] | null;
    submitted: boolean = false;

    @ViewChild('dt') dt!: Table;
    exportColumns!: ExportColumn[];

    //inyección
    constructor(private service: MovementTypeService,
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
            this.movementTypeList = data;
            console.log(this.movementTypeList);
            this.cd.markForCheck();
        });  }

   openNew() {
        this.movementType = {};
        this.submitted = false;
        this.MovementTypeDialog = true;
    }      

 editMovementType(movementType: MovementType) {
    }

    deleteSelectedMovementTypes() {
    }

    hideDialog() {
        this.MovementTypeDialog = false;
        this.submitted = false;
    }

    deleteMovementType(movementType: MovementType) {

    }  
   findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.movementTypeList.length; i++) {
            if (this.movementTypeList[i].id === id) {
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

    saveMovementType() {
        this.submitted = true;
    }
}
