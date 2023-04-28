import {app,serverStart} from './init/server';
import { PORT } from './init/config';

serverStart();
app.listen({port: PORT}, ()=> {
    console.log('server is listennin')
})
