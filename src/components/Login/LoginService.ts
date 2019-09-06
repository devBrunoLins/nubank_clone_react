import { Observable } from 'rxjs';

const verifyAccess = () => {

    return Observable.create((observer: any) => {
        observer.next({tst: "Maluco deu certo!"});
    });
}

export {
    verifyAccess
}
