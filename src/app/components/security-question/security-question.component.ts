import { Component, OnInit, Input } from '@angular/core';

import { SecurityQuestion } from '../../models/security-question';

@Component({
  selector: 'app-security-question',
  templateUrl: './security-question.component.html',
  styleUrls: ['./security-question.component.css']
})
export class SecurityQuestionComponent implements OnInit {

  @Input() securityQuestion: SecurityQuestion;
  
  constructor() { }

  ngOnInit(): void {
  }

}
