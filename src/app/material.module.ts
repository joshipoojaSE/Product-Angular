import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon"; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 
@NgModule({
  imports: [MatToolbarModule, MatIconModule, MatDialogModule, MatGridListModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, MatTableModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule],
  exports: [MatToolbarModule, MatIconModule, MatDialogModule, MatGridListModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, MatTableModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule]
})
export class MaterialModule {}
