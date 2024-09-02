export const HOMEPAGE_QUERY = `
  query {
    posts(first: 5) {
      nodes {
        title
      }
    }
    page(id: "home", idType: URI) {
        title
        content
        banner {
          banner1 {
            node {
              id
              title
              description
              mediaItemUrl
              altText
            }
          }
          banner2 {
            node {
              id
              title
              description
              mediaItemUrl
              altText
            }
          }
          banner3 {
            node {
              id
              title
              description
              mediaItemUrl
              altText
            }
          }
          banner4 {
            node {
              id
              title
              description
              mediaItemUrl
              altText
            }
          }
        }
        cultura {
          titulo
          descricao
          items {
            cultura1 {
              titulo
              imagem {
                node {
                  id
                  mediaItemUrl
                  altText
                }
              }
            }
            cultura2 {
              titulo
              imagem {
                node {
                  id
                  mediaItemUrl
                  altText
                }
              }
            }
            cultura3 {
              titulo
              imagem {
                node {
                  id
                 mediaItemUrl
                 altText
                }
              }
            }
            cultura4 {
              titulo
              imagem {
                node {
                  id
                  mediaItemUrl
                  altText
                }
              }
            }
          }
        }
        comoFunciona {
          titulo
          itens {
            accordion1 {
              titulo
              descricao
            }
            accordion2 {
              titulo
              descricao
            }
            accordion3 {
              titulo
              descricao
            }
            accordion4 {
              titulo
              descricao
            }
          }
          imagens {
            imagem1 {
              node {
                id
                mediaItemUrl
                altText
              }
            }
            imagem2 {
              node {
                id
                mediaItemUrl
                altText
              }
            }
            imagem3 {
              node {
                id
                mediaItemUrl
                altText
              }
            }
          }
        }
        sobreNos {
          titulo
          descricao
          imagem {
            node {
              id
              uri
            }
          }
        }
        timePreview {
          titulo
          membros {
            membro1 {
              titulo
              linkedin
              cargo
              imagem {
                node {
                  id
                  uri
                }
              }
            }
            membro2 {
              titulo
              linkedin
              cargo
              imagem {
                node {
                  id
                  uri
                }
              }
            }
          }
        }
        depoimentos {
          titulo
          depoimentoDeClientes {
            nomeDoCliente
            citacao
            comentario
            cargo
            imagem {
              node {
                id
                uri
              }
            }
          }
          depoimentoDeClientes2 {
            nomeDoCliente
            citacao
            comentario
            cargo
            imagem {
              node {
                id
                uri
              }
            }
          }
          depoimentoDeClientes3 {
            nomeDoCliente
            citacao
            comentario
            cargo
            imagem {
              node {
                id
                uri
              }
            }
          }
          depoimentoDeClientes4 {
            nomeDoCliente
            citacao
            comentario
            cargo
            imagem {
              node {
                id
                uri
              }
            }
          }
        }
    }
  }
`;
