import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  formGroup = this.fb.group({
    id: [''],
    title: ['', [Validators.required]],
    description: [''],
    body: ['', [Validators.required, Validators.minLength(10)]],
    tags: this.fb.array([
      this.fb.control('HTML'),
      this.fb.control('CSS'),
      this.fb.control('JavaScript')
    ])
  });

  // TODO: ormArray getter 寫法超酷!
  get tags() {
    return this.formGroup.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.formGroup);
  }

  addTag(tag: string) {
    this.tags.push(this.fb.control(tag));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }
}
