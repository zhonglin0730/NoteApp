import { Client, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('678c95a700073310eef1'); 

export const databases = new Databases(client);