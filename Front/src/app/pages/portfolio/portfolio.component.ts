import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit(): void {
      axios.get('http://localhost:8000')
    }
  

}
