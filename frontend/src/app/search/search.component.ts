import { Component, OnInit } from '@angular/core';
import api from '../../services/api'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  cpfStudent: string = "";

  grades: [] = [];

  async searchGrade(cpf: string) {
    try {
      const result = await api.post('myGrade', {cpf});
      this.grades = result.data;
      console.log(result.data)
      this.cpfStudent = "";
    } catch(e) {
      console.log(e);
    }
  }

  get setCpfDisabled() {
    return this.cpfStudent === '' || this.cpfStudent.length !== 11;
  }

}

