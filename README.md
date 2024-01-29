# Projeto Labeddit
## Projeto fullstack do curso da Labenu.

**Descrição**
  O projeto é um projeto full-stack de uma rede social, com páginas de Home, SignUp, Feed, Detalhes de posts onde é possível comentar e dar likes em posts e comentários. 
Ele utiliza uma API própria e foi desenvolvido em React e utiliza React Router para cuidar das rotas, styled-components para a estilização e Axios para a integrção com o banco de dados.

**Funcionalidades** 
- Home: Na primeira página é possível fazer login com uma conta ja cadastrada ou entrar na página de SignUp e criar uma conta nova!
- SignUp: Na página de SignUp o usuário pode criar uma conta nova utilizando email, senha e nome. Após criada a conta ele é redirecionado diretamente à página de feed.
- Feed: Página protegida para usuários autenticados, nela o usuário pode ver os posts de outros usuários, fazer novos posts, clicar em um post especifico e ver os comentários, além de dar likes e dislikes.
- Detalhes de posts: Nessa página o usuário pode comentar no post, ver outros comentários além de dar likes e dislikes nos comentários.

**Ferramentas Utilizadas**
- React
- React Router
- styled-components
- Axios

**Instalação e Uso**
- Clone o repositório
- Executo o npm install para instalar as dependências
- Execute o npm run start para iniciar o servidor de desenvolvimento
- Acesse o projeto no navegador através do link http://localhost:3000

**Capturas de tela**
- Página Home
  ![HomePage](https://github.com/vargasbernardo/labeddit-frontend/assets/114179673/36725217-89ba-41b4-bf07-6a78d7b32704)

- Página de SignUp
  

![SignUpPage](https://github.com/vargasbernardo/labeddit-frontend/assets/114179673/1914c3e1-bc22-4f49-8d3f-a28c4520d229)

-Página do Feed


![Screenshot 2024-01-29 143122](https://github.com/vargasbernardo/labeddit-frontend/assets/114179673/69d1d944-c0ee-4913-bb3b-6e47021e6083)


-Página de Detalhes
![PostDetailpage](https://github.com/vargasbernardo/labeddit-frontend/assets/114179673/e7c4b4d2-56b9-49df-a915-271e83597136)


**Informções Relevantes**
- [Link do repositório para o BackEnd:] (https://github.com/vargasbernardo/labeddit-backend)
- O BackEnd está sendo hospedado no Render utilizando o deploy free tier, o que faz com que o servidor fique inativo após tempo sem uso. Caso Demore o loading ou de Erro na primeira requisição, um refresh na página pode resolver wink wink.
