import { Pipe, PipeTransform } from '@angular/core';
import { DataSourceService } from '../shared/data-source.service';

@Pipe({
  name: 'catergoryName'
})
export class CatergoryNamePipe implements PipeTransform {

  categories = [];
  constructor(private dataSource : DataSourceService) {
    
    
  }
  getCategories() {
    return this.dataSource
      .getCategories()
      .subscribe((response) => {this.categories = response, console.log(this.categories)});
  }
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 1){
      return 'Men';
    }
    else if ( value == 2){
      return 'Women';
    }else if ( value == 3){
      return 'Phone';
    }else{
      return 'Others';
    }
  }

}
