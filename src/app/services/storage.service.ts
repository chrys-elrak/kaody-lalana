import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key: string, value: any): Promise<void> {
    await Storage.set({
      key,
      value: JSON.stringify(value)
    });
  }

  async getObject(key: string): Promise<any> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  async setItem(key: string, value: any): Promise<void> {
    await Storage.set({
      key,
      value
    });
  }

  async getItem(key: string): Promise<any> {
    const { value } = await Storage.get({ key });
    return value;
  }

  async removeItem(): Promise<void> {
    await Storage.remove({ key: 'name' });
  }

  async keys(): Promise<any[]> {
    const { keys } = await Storage.keys();
    return keys;
  }

  async clear(): Promise<void> {
    await Storage.clear();
  }

}
