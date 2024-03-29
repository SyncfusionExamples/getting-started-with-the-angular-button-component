import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule, ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  @ViewChild('toggleBtn')  toggleBtn: ButtonComponent | any;   
  btnClick() {
    if(this.toggleBtn.element.classList.contains('e-active'))
    {
      this.toggleBtn.content = 'Pause';
    }
    else
    {
      this.toggleBtn.content = 'Play';
    }
  }
}
