import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories = [
            {id: 1, name: 'moradia', description: 'Pagamentos da casa'},
            {id: 2, name: 'Saude', description:  'Health plan'},
            {id: 3, name: 'leisure', description: 'Cinema, park, pool'},
            {id: 4, name: 'Salário', description: 'Recebiimento de salário'},
            {id: 5, name: 'Gastos', description: 'Gastos diversos'}
        ];
        return {categories};
    }
}
