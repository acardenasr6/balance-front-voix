import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Movement } from '../../model/movement';
import { MovementService } from '../../services/movement.service';
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
  selector: 'app-movement.component',
  standalone: true,
  imports: [TableModule,  ButtonModule, SelectModule, ToastModule, ToolbarModule, InputTextModule, TextareaModule, CommonModule,  InputTextModule, FormsModule, IconFieldModule, InputIconModule],
  templateUrl: './movement.component.html',
  providers: [MessageService, ConfirmationService, MovementService],

  styleUrl: './movement.component.css'
})
export class MovementComponent implements OnInit{

  MovementDialog: boolean = false;

    movementList!: Movement[];
    movement!: Movement;

    selectedMovement!: Movement[] | null;
    submitted: boolean = false;

    @ViewChild('dt') dt!: Table;
    exportColumns!: ExportColumn[];

    //inyección
    constructor(private service: MovementService,
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
            this.movementList = data;
            console.log(this.movementList);
            this.cd.markForCheck();
        });
    }

     openNew() {
            this.movement = {};
            this.submitted = false;
            this.MovementDialog = true;
        }
    
        editMovement(movement: Movement) {
        }
    
        deleteSelectedMovement() {
        }
    
        hideDialog() {
            this.MovementDialog = false;
            this.submitted = false;
        }
    
        deleteMovement(movement: Movement) {
    
        }
    
        findIndexById(id: number): number {
            let index = -1;
            for (let i = 0; i < this.movementList.length; i++) {
                if (this.movementList[i].id === id) {
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
    
        saveMovement() {
            this.submitted = true;
        }
    
}
