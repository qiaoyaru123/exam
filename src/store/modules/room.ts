import {observable, action} from 'mobx';
import {room} from '../../service/index';

// 引入mobx
class Room{

    @action async room(): Promise<any>{
        const result: any = await room();
        return result;
    }
}

export default Room;