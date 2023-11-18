import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './commpnent/all-product/all-product.component';
import { ProductDetailsComponent } from './commpnent/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './commpnent/product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AllProductComponent,
        ProductDetailsComponent,
        ProductComponent
    ],
    exports: [
        AllProductComponent,
        ProductDetailsComponent,ProductComponent
    ],
    imports: [
        CommonModule, RouterModule,
        SharedModule,FormsModule
    ]
})
export class ProductModule { }
