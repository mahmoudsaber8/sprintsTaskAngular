import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.scss']
})
export class MyContactsComponent {
  contacts: Contact[] = [
    { name: 'Mahmoud Saber', phoneNumber: '01116661891' },
    { name: 'Mostafa Nasr', phoneNumber: '01001234567' }
  ];

  newName: string = '';
  newPhoneNumber: string = '';

  searchResult: Contact[] = []; 

  addContact(contactName: string, contactNumber: string): void {
    this.contacts.push({
      name: contactName,
      phoneNumber: contactNumber
    });
    
    if (this.searchResult.length > 0) {
      this.searchByName(this.searchResult[0].name);
    }
  }

  searchByName(name: string): void {
    
    this.searchResult = this.contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      );
  }

  
  editMode: number = -1;

  startEdit(index: number): void {
    this.editMode = index;
  }

  saveEdit(index: number, editedName: string, editedPhoneNumber: string): void {
    // Manually update the contact values in the array
    this.contacts[index].name = editedName;
    this.contacts[index].phoneNumber = editedPhoneNumber;
    
    this.editMode = -1; // Exit edit mode
  }

  cancelEdit(index: number): void {
    this.editMode = -1; // Exit edit mode
  }

  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }
}

