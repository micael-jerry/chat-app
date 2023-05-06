import fs from 'fs'
import path from 'path';

type StorageData = { [key: string]: any };

export class Storage {
    private static data: StorageData = {};

    private static filePath = path.join(process.cwd(), 'data.txt');

    public static getItem(key: string): string | null {
        return this.data[key] ?? null;
    }

    public static setItem(key: string, value: string): void {
        this.data[key] = value;
        fs.writeFileSync(this.filePath, JSON.stringify(this.data));
    }

    public static removeItem(key: string): void {
        delete this.data[key];
        fs.writeFileSync(this.filePath, JSON.stringify(this.data));
    }

    public static clear(): void {
        this.data = {};
        fs.writeFileSync(this.filePath, JSON.stringify(this.data));
    }

    public static initialize(): void {
        if (fs.existsSync(this.filePath)) {
            const storageStr = fs.readFileSync(this.filePath, 'utf-8');
            this.data = JSON.parse(storageStr);
        } else {
            fs.writeFileSync(this.filePath, JSON.stringify(this.data));
        }
    }
}