import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  parseEnum(_enum): Array<any> {
    let map: { id: number; name: string }[] = [];
    for (var n in _enum) {
      if (typeof _enum[n] === 'number') {
        map.push({ id: <any>_enum[n], name: n });
      }
    }
    return map;
  }

    parseEnumName(type, value): string {
        for (var n in type) {
            if (type[n] === value) {
                return n;
            }
        }
        return '';
    }

}
