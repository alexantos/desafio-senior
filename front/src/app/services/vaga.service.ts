import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base/base.service';
import { Vaga } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class VagaService extends BaseService<Vaga> {

    constructor(private http: HttpClient) {
        super('vaga/', http);
    }

}