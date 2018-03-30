import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'ConvertToSpaces'
})
export class ConvertToSpacePipe implements PipeTransform {
    transform(value: string,character: string) {
        return value.replace(character, ' ');
    }
}