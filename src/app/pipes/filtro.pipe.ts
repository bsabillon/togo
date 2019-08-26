import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[], text: string): any[] {
    console.log(array);
    if (text === '') {
      return array;
    }

    // text = text.toLowerCase();

    return array.filter(item => {
      return item.productName.includes(text);
    });
  }

}
