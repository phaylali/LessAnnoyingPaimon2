import Client from "./Core";
import keepAlive from './server';
new Client().init();
keepAlive();
