import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstListStr: string = '';
  secondListStr: string = '';
  uniqueFirstList: string = '';
  uniqueSecondList: string = '';
  hasChanges: boolean = false;

  refresh_uniques(): void {
    let firstList: string[] = this.firstListStr.split('\n').map(s => s.toLocaleLowerCase());
    let secondList: string[] = this.secondListStr.split('\n').map(s => s.toLocaleLowerCase());

    this.uniqueFirstList = firstList.filter(e => secondList.indexOf(e) == -1).join('\n');
    this.uniqueSecondList = secondList.filter(e => firstList.indexOf(e) == -1).join('\n');

    this.hasChanges = false;
  }

  is_result_disabled(): boolean {
    return this.hasChanges || (!this.firstListStr.length && ! this.secondListStr.length);
  }
}
