import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/interface/product';
import { DataService } from '../../shared/service/data.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @ViewChild('previewImg') previewImg: ElementRef;
  isCansel: boolean = false;
  image: File;
  name: string = '';
  count: string = '';
  width: string = '';
  height: string = '';
  weight: string = '';
  description: string = '';
  errorField = {
    name: false,
    count: false,
    width: false,
    height: false,
    weight: false,
    description: false
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.isCansel = !this.isCansel;
  }

  send() {
    if (this.validationForm()) {
      this.name = '';
      this.count = '';
      this.width = '';
      this.height = '';
      this.weight = '';
      this.description = '';
      return false;
    }
    const id = new Date().getTime();
    const newProduct: Product = {
      id,
      name: this.name,
      count: this.count,
      imageUrl: this.previewImg.nativeElement.src,
      size: {
        width: this.width,
        height: this.height
      },
      weight: this.weight,
      description: this.description
    };
    this.dataService.addProduct(newProduct);
  }

  validationForm() {
    if (!this.name.trim()) {
      return this.errorField.name = true;
    }
    this.errorField.name = false;
    if (!this.count) {
      return this.errorField.count = true;
    }
    this.errorField.count = false;
    if (!this.width) {
      return this.errorField.width = true;
    }
    this.errorField.width = false;
    if (!this.height) {
      return this.errorField.height = true;
    }
    this.errorField.height = false;
    if (!this.weight) {
      return this.errorField.weight = true;
    }
    this.errorField.weight = false;
    if (!this.description.trim()) {
      return this.errorField.description = true;
    }
    this.errorField.description = false;
    return false;
  }

  readThis($event: any) {
    const file = $event.target.files[0]
    const reader: FileReader = new FileReader();

    reader.onload = () => {
      this.previewImg.nativeElement.src = reader.result;
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.previewImg.nativeElement.src = '';
    }

  }

}
