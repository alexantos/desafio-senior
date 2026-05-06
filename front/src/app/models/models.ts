
export interface Empresa {
    razao_social: string;
    nome_fantasia: string;
    cnpj: string;
}

export interface Candidato {
    nome: string;
    cpf: string;
    nascimento: Date;
    pretensao_salarial: number;
    experiencia: string;
    escolaridade: string;
}

export interface Vaga {
    id: number;
    empresa: Empresa;
    nome: string
    faixa_salarial: string;
    requisitos: string
    escolaridade_exigida: string
}

export interface Candidatura {
    candidato: Candidato;
    vaga: Vaga
}
