import { Component, OnInit } from '@angular/core';
import {IUser} from '../../users/user-list/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  hidden = false;
  usersFilted:IUser[]=[];

  newId:number;
  newName:string;
  newAddress:string;
  newEmail:string;

  updateId:number;
  updateName:string;
  updateAddress:string;
  updateEmail:string;
  users:IUser[]=[
    {
      id:0,
      name:'Cuong',
      address : 'Dong Anh',
      email :'cuong@gmail.com'
    },
    {
      id:1,
      name : 'Luc',
      address : 'Quat Lam',
      email : 'luc@gmail.com'
    },
    {
      id:2,
      name:'Tung',
      address : 'Thanh Xuan',
      email : 'tung@gmail.com'
    },
    {
      id : 3,
      name : 'Duong',
      address : 'Ha Nam',
      email : 'duong@gmail.com'
    },
    {
      id : 4,
      name : 'Quang',
      address : 'Hang Bai',
      email : 'quang@gmail.com'
    }
  ];


  constructor() { }

  ngOnInit(): void {
    this.usersFilted = this.users;
  }
  showHide()
  {
    this.hidden = !this.hidden;
  }
  search(event)
  {
    let keyword = event.target.value
    this.usersFilted = (keyword)?this.filterUser(keyword):this.users;
  }
  filterUser(keyword)
  {
    return this.users.filter(user =>
    {
      return user.name.toLowerCase().indexOf(keyword) != -1;
    })
  }
  deleteUser(id)
  {
    if(confirm('Are you sure?'))
    {
      let index = this.users.findIndex(usersFilted => usersFilted.id == id);
    this.users.splice(index, 1);
    }
  }
  addUser()
  {
    this.users.push({
      id:this.newId,
      name:this.newName,
      address:this.newAddress,
      email:this.newEmail
    })
  }
  edit(id)
  {
    let index = this.users.findIndex(usersFilted => usersFilted.id == id);
    this.updateId = this.users[index].id;
    this.updateName = this.users[index].name;
    this.updateAddress = this.users[index].address;
    this.updateEmail = this.users[index].email;
  }
  update(id)
  {
    let index = this.users.findIndex(user => user.id === id);
    this.users.splice(index, 1, {
      id: this.updateId,
      name: this.updateName,
      address: this.updateAddress,
      email: this.updateEmail
    });
  }
}
