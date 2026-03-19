import { Component, OnInit } from '@angular/core';
import animal from '../../../assets/json/animal.json';
import { ImageCardComponent } from './component/imagecard/imagecard.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';

interface Photo {
  id: number;
  title: string;
  url: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ImageCardComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  endpoint = 'https://jsonplaceholder.typicode.com/photos';
  photos: Photo[] = [];
  categories: String[] = ['Cat', 'Dog', 'Architecture', 'Bird', 'All'];
  userList2: User[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit() {
    this.form = this.fb.group({
      category: ['All', Validators.required]
    })
    this.getUsers();
    this.getPhotos('All');
    console.log(animal);
    console.log(this.categories);
  }


  getUsers = async () => {
    const userList: User[] = await fetch('https://jsonplaceholder.typicode.com/users').
    then(res => res.json())
    userList.forEach(user => {
      console.log(user.name);
    })

    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((res) => { this.userList2 = res as User[]});
    
  }

  getPhotos = async (category: String) => {
    try {
      const response = await fetch('../../../assets/json/animal.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Photo[] = await response.json();
      this.photos = data.filter((res: Photo) => res.category === category || category === 'All');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  // onSelect = (category: String) => {
  //   if (category === 'All') {
  //     this.getPhotos('All');
  //   } else {
  //     this.getPhotos(category);
  //   }
  // }

  onSubmit(){
    const category = this.form.value.category;
    this.getPhotos(category);
  }

  onSelect(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    this.getPhotos(category);
  }
}
