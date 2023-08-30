import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPost, IUser } from '@customTypes/models';
import * as moment from 'moment';
import { UserDataService } from 'src/app/api/services/user-data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent {
  userData!: IUser;
  avatar!: string;
  fname!: string;
  lname!: string;

  createPostForm!: FormGroup;
  isShowed: boolean = false;
  newPost!: IPost;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private userDataService: UserDataService
  ) {
    this.userDataService.get().subscribe((data) => {
      this.userData = data;
      this.avatar = data.avatar;
      this.fname = data.fname;
      this.lname = data.lname;
    });
    this.userId = localStorage.getItem('userId') || '';
    if (!this.userId) {
      console.log('userId missing');
    }
    this._createForm();
  }

  private _createForm(): void {
    this.createPostForm = this.fb.group({
      text: [''],
      photos: ['']
    });
    this.createPostForm.valueChanges.subscribe((v) => {});
  }

  get _text() {
    return this.createPostForm.get('text');
  }

  get _photos() {
    return this.createPostForm.get('photos');
  }

  showOrHide() {
    if (!this._text?.value && !this._photos?.value) {
      this.isShowed = !this.isShowed;
    }
  }

  onSubmit() {
    console.log('create post');
    console.log(this.createPostForm);
    //todo: валидация

    const photos: File[] = this._photos?.value || [];
    const text: string = this._text?.value;
    const presentTime = moment();
    const date = `${presentTime.year()} ${presentTime.month()} ${presentTime.date()} ${presentTime.hours()} ${presentTime.minutes()} ${presentTime.seconds()} ${presentTime.millisecond()}`;
    //todo: добавлять нули, чтобы потом было правильное сравнение строк
    this.newPost = {
      pageId: this.userId,
      authorId: this.userId,
      authorImg: this.avatar,
      authorFName: this.fname,
      authorLName: this.lname,
      photos: photos,
      text: text,
      date: date,
      id: '',
      likes: 0,
      dislikes: 0,
      comments: [],
      reactions: []
    };
    this.http
      .post(`http://localhost:3000/posts`, this.newPost)
      .subscribe((post: any) => {
        console.log('new post');
        console.log(post);
        this.userData.posts.push(post.id);
        this.userDataService.set(this.userData);
        this.http
          .put(`http://localhost:3000/users/${this.userId}`, this.userData)
          .subscribe((response) => {
            console.log(response);
          });
      });
    this.createPostForm.reset();
  }

  removePhoto({ name }: File): void {
    this._photos?.setValue(
      this._photos.value?.filter((current: File) => current.name !== name) ?? []
    );
  }
}
