import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      const storedValue = this.storage.getItem(key);
      if (storedValue) {
        try {
          return JSON.parse(storedValue);
        } catch (error) {
          console.error('Erro ao analisar valor armazenado:', error);
          return null;
        }
      }
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }

  getSession(key: string): any {
    if (this.storage) {
      const storedValue = sessionStorage.getItem(key);
      if (storedValue) {
        try {
          return JSON.parse(storedValue);
        } catch (error) {
          console.error('Erro ao analisar valor armazenado na sessionStorage:', error);
          return null;
        }
      }
    }
    return null;
  }
  

  setSession(key: string, value: any): boolean {
    if (this.storage) {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }
}