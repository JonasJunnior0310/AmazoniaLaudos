import gql from 'graphql-tag';

export const request = gql`
query requests($intersection: geometry){
  car (limit: 2 where: {geom: {_st_intersects: $intersection}}){
    cod_imovel
    dados_ca28
    dados_ca29
  }
  sigef_c (limit: 5){
    codigo_imo
    detentor_c
    detentor_n
  }
  sigef_r (limit: 1){
    codigo_imo
    detentor_c
    detentor_n
  }
  tl (limit: 1){
    id
    nome_deten
    cpf_detent
  }
  snci (limit: 1){
    codigo_imo
    nome_inter
  }
  embargo (limit: 1){
    numero_tad
    nom_pessoa
    cpf_cnpj_i
  }
}`

export const apiData = gql `{
  alertReport(alertId: 119038){
    areaHa
    alertGeomWkt
  }
}`