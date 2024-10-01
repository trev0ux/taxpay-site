export const SITECONTENT_QUERY = `
   query OptimizedPages {
    home: page(id: "home", idType: URI) {
      id
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
                altText
              }
            }
          }
          cultura2 {
            titulo
            imagem {
              node {
                id
                uri
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
                uri
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
                uri
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
              uri
              mediaItemUrl
              altText
            }
          }
          imagem2 {
            node {
              id
              uri
              mediaItemUrl
              altText
            }
          }
          imagem3 {
            node {
              id
              uri
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
            mediaItemUrl
            altText
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
                mediaItemUrl
                altText
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
                mediaItemUrl
                altText
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
                altText
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
                altText
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
                altText
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
                altText
              }
            }
            cargo
          }
        }
      }
    }
    
    quemSomos: page(id: "quem-somos", idType: URI) {
      id
      title
      content
      quemSomos {
        ganhos {
          valor {
            valor1 {
              numero
              descricao
            }
            valor2 {
              numero
              descricao
            }
            valor3 {
              numero
              descricao
            }
            valor4 {
              numero
              descricao
            }
          }
        }
        titulo
        descricao
        imagem {
          node {
            id
            title
            description
            mediaItemUrl
            altText
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
          mediaItemUrl
          altText
        }
      }
    }
    }
    
    servicos: page(id: "servicos", idType: URI) {
      id
      title
      content
      services {
        titulo
        descricao
        servicos {
          servicos1 {
            titulo
            descricao
            icone {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
          }
          servicos2 {
            titulo
            descricao
            icone {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
          }
          servicos3 {
            titulo
            descricao
            icone {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
          }
          servicos4 {
            titulo
            descricao
            icone {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
          }
          servicos5 {
            titulo
            descricao
            icone {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
          }
          servicos6 {
            titulo
            descricao
            icone {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
      quemSomos {
        titulo
        descricao
        imagem {
          node {
            id
            title
            description
            mediaItemUrl
            altText
          }
        }
      }
    }
    
    time: page(id: "time", idType: URI) {
      id
      title
      content
      time {
        titulo
        membrosDoTime {
          membro1 {
            nome
            cargo
            imagem {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
            linkedin
          }
          membro2 {
            nome
            cargo
            imagem {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
            linkedin
          }
          membro3 {
            nome
            cargo
            imagem {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
            linkedin
          }
          membro4 {
            nome
            cargo
            imagem {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
            linkedin
          }
          membro5 {
            nome
            cargo
            imagem {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
            linkedin
          }
          membro6 {
            nome
            cargo
            imagem {
              node {
                id
                title
                description
                mediaItemUrl
                altText
              }
            }
            linkedin
          }
        }
      }
    }
  }
`;
