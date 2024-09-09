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
        banner {
          node {
            id
            title
            description
            mediaItemUrl
            altText
          }
        }
        backgroundColor
      }
      banner2 {
        banner {
          node {
            id
            title
            description
            mediaItemUrl
            altText
          }
        }
        backgroundColor
      }
      banner3 {
        banner {
          node {
            id
            title
            description
            mediaItemUrl
            altText
          }
        }
        backgroundColor
      }
      banner4 {
        banner {
          node {
            id
            title
            description
            mediaItemUrl
            altText
          }
        }
        backgroundColor
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
              uri
              mediaItemUrl
            }
          }
        }
        cultura2 {
          titulo
          imagem {
            node {
              id
              uri
            }
          }
        }
        cultura3 {
          titulo
          imagem {
            node {
              id
              uri
            }
          }
        }
        cultura4 {
          titulo
          imagem {
            node {
              id
              uri
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
            uri
          }
        }
        imagem2 {
          node {
            id
            uri
          }
        }
        imagem3 {
          node {
            id
            uri
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
      depoimentos {
        depoimento1 {
          nome
          citacao
          comentario
          imagem {
            node {
              id
              mediaItemUrl
            }
          }
          cargo
        }
        depoimento2 {
          nome
          citacao
          comentario
          imagem {
            node {
              id
              mediaItemUrl
            }
          }
          cargo
        }
        depoimento3 {
          nome
          citacao
          comentario
          imagem {
            node {
              id
              mediaItemUrl
            }
          }
          cargo
        }
       depoimento4 {
          nome
          citacao
          comentario
          imagem {
            node {
              id
              mediaItemUrl
            }
          }
          cargo
        }
      }
    }
    }
  }
`;

export const SERVICES_QUERY = `
  query {
    posts(first: 5) {
      nodes {
        title
      }
    }
    page(id: "", idType: URI) {

}`