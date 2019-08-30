import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  public endpoint = 'https://togo01.herokuapp.com';
  headers = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getAddress(userEmail: string) {
    return this.http.get(`${this.endpoint}/addressByUser/${userEmail}`);
  }

  deleteAddress(addressId: string) {
    return this.http.delete(`${this.endpoint}/deleteAddress/${addressId}`);
  }

  // tslint:disable-next-line: max-line-length
  setAddress(userEmail: string, addressDescription: string, addressPhone: string, houseNumber: string, addressReference: string, addressAlias: string) {
    // tslint:disable-next-line: max-line-length
    const body = `{"userEmail": "${userEmail}", "addressDescription": "${addressDescription}", "addressPhone": "${addressPhone}", "houseNumber": "${houseNumber}", "addressReference": "${addressReference}", "addressAlias": "${addressAlias}" }`;
    return this.http.post(`${this.endpoint}/addAddress`, body, {headers: this.headers});
  }
}
