interface IStartup {
    name: string;
    sector: string;
    description: string;
    productsAndServices: string[];
    riceviIncentivo(incentivo: IIncentivo): void;
}

interface IIncentivo {
    id: number;
    description: string;
    value: number;
    eligibilityCriteria: string;
    assegnaAStartup(startup: IStartup): void;
}

interface ICittadino {
    name: string;
    surname: string;
    age: number;
    sportingInterests: string[];
    partecipaAttività(startup: IStartup): void;
}

class Startup implements IStartup {
    constructor(
        public name: string,
        public sector: string,
        public description: string,
        public productsAndServices: string[]
    ) {}

    riceviIncentivo(incentivo: IIncentivo): void {
        console.log(`Incentivo ricevuto: ${incentivo.description}`);
    }
}

class Incentivo implements IIncentivo {
    constructor(
        public id: number,
        public description: string,
        public value: number,
        public eligibilityCriteria: string
    ) {}

    assegnaAStartup(startup: IStartup): void {
        console.log(`Incentivo assegnato alla startup: ${startup.name}`);
    }
}

class Cittadino implements ICittadino {
    constructor(
        public name: string,
        public surname: string,
        public age: number,
        public sportingInterests: string[]
    ) {}

    partecipaAttività(startup: IStartup): void {
        console.log(`${this.name} partecipa all'attività della startup: ${startup.name}`);
    }
}

let sporting = new Startup(
    'Sporting',
    'Sport',
    'Attività sportive',
    ['Prenotazioni', 'Calendario', 'Tennis', 'Calcio']
);

let surfers = new Startup(
    'Surfers',
    'Sport aquatico',
    'Attività sportive',
    ['Prenotazioni', 'Calendario', 'Surf']
);

let baseballer = new Startup(
    'Baseballer',
    'Sport Baseball',
    'Attività sportive',
    ['Prenotazioni', 'Calendario', 'Baseball']
);

let incentivo1 = new Incentivo(1, 'Incentivo per attività sportive', 500, 'Cittadino minorenne');
let incentivoSurf = new Incentivo(2, 'Incentivo per attività sportive aquatica', 1000, 'Cittadino maggiorenne');
let incentivoBaseball = new Incentivo(3, 'Incentivo per chi è appassionato del baseball', 800, 'Cittadino minorenne');

sporting.riceviIncentivo(incentivo1);
incentivo1.assegnaAStartup(sporting);

surfers.riceviIncentivo(incentivoSurf);
incentivoSurf.assegnaAStartup(surfers);

baseballer.riceviIncentivo(incentivoBaseball);
incentivoBaseball.assegnaAStartup(baseballer);

let cittadino1 = new Cittadino('Mario', 'Rossi', 25, ['Surf', 'Kayak']);
cittadino1.partecipaAttività(surfers);

let cittadino2 = new Cittadino('Gianluca', 'Bianchi', 30, ['Baseball', 'Football']);
cittadino2.partecipaAttività(baseballer);

let cittadino3 = new Cittadino('Dario', 'Cepele', 21, ['Tennis', 'Padel']);
cittadino3.partecipaAttività(sporting);

console.log(cittadino1)
console.log(cittadino2)
console.log(cittadino3)
