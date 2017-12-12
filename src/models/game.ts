import { Injectable } from '@angular/core';
@Injectable()
export class Game{
    constructor(public id: string,
                public title: string = "", 
                public comment: string = "", 
                public player: string = "",
                public duration: number = 0, 
                public price: number = 0, 
                public editor: string = "", 
                public listType: string = "",
                public category: any[] = []){}
}