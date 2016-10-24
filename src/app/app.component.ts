import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstListStr: string = '';
  secondListStr: string = '';
  common: string = '';
  uniqueFirstList: string = '';
  uniqueSecondList: string = '';
  hasChanges: boolean = false;

  refresh_uniques(): void {
    let firstList: string[] = this.firstListStr.split('\n').map(s => s.toLocaleLowerCase().trim());
    let secondList: string[] = this.secondListStr.split('\n').map(s => s.toLocaleLowerCase().trim());

    this.uniqueFirstList = firstList.filter(e => e.length > 0 && secondList.indexOf(e) == -1).join('\n');
    this.uniqueSecondList = secondList.filter(e => e.length > 0 && firstList.indexOf(e) == -1).join('\n');
    this.common = firstList.filter(e => e.length > 0 && secondList.indexOf(e) != -1).join('\n');

    this.hasChanges = false;
  }

  is_result_disabled(): boolean {
    return this.hasChanges || (!this.firstListStr.length && ! this.secondListStr.length);
  }
}
