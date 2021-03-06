import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataOverTime } from '../Models/data-over-time.model';
import { PredictionModel } from '../Models/prediction-model.model';
import { JsonAppConfigService } from './json-app-config.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetZADataOverTime()
  {
    
    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    
    return this.http.get<Array<DataOverTime>>(baseEndpoint + "Data/SouthAfricaOverTime");
  }

  GetPredicitonArea()
  {
    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    return this.http.get<Array<PredictionModel>>(baseEndpoint + "Data/PredictAreas");
  }
  GetTrainningData()
  {
    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    return this.http.get<Array<number>>(baseEndpoint + "Data/GetTrainningData");
  }

  GetUpperBoundData()
  {
    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    return this.http.get<Array<number>>(baseEndpoint + "Data/GetUpperBoundData");
  }
  GetLowerBoundData()
  {
    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    return this.http.get<Array<number>>(baseEndpoint + "Data/GetLowerBoundData");
  }
  GetForecastData()
  {
    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    return this.http.get<Array<number>>(baseEndpoint + "Data/GetForecastData");
  }
  GetAccuracyData()
  {
    var baseEndpoint = JsonAppConfigService.settings && JsonAppConfigService.settings.AnorocEndpoint ?
    JsonAppConfigService.settings.AnorocEndpoint : '';
    return this.http.get<Array<number>>(baseEndpoint + "Data/GetAccuracyData");
  }
}
