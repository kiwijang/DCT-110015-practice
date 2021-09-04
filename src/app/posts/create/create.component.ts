import { Router } from '@angular/router';
import { PostService } from './../../post.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreateArticle } from 'src/app/interfaces/create-article';

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

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.formGroup);
  }

  addTag(tag: string) {
    this.tags.push(this.fb.control(tag));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  create() {
    const data: CreateArticle = {
      ...this.formGroup.value, tagList: [...this.formGroup.value.tags]
    };
    this.postService.createArticle(data).subscribe(() => {
      alert('新增成功');
      this.router.navigateByUrl('/');
    })
  }
}
