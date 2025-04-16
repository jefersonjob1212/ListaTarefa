import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TarefaRequest } from '../models/request/tarefa-request';
import { Observable } from 'rxjs';
import { TarefaResponse } from '../models/response/tarefa=response';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(
    private httpclient:HttpClient) { }



  getall(tarefaRequest: TarefaRequest) : Observable<TarefaResponse>{
    return this.httpclient.get<TarefaResponse>('');

  }
  getById(id:number){
    return this.httpclient.get<TarefaResponse>('' + id);
  }

  create(tarefaRequest: TarefaRequest){
    return this.httpclient.post<TarefaResponse>('',tarefaRequest);
  }

  update(id:number, tarefaRequest: TarefaRequest){
    return this.httpclient.post<TarefaResponse>('' + id , tarefaRequest);
  }

  delete(id:number){
    return this.httpclient.delete<TarefaResponse>('' + id );
  }
}
