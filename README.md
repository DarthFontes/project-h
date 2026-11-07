# Wiki da mesa (GitHub Pages + Firebase)

## 1. Firebase (plano grátis Spark)
1. Em console.firebase.google.com crie um projeto e adicione um **app Web**. Copie a configuração para `config.js`.
2. **Authentication > Método de login**: ative **E-mail/senha**. (Os jogadores entram com nome de usuário; o site usa `usuario@mesa.local` por baixo.)
3. **Firestore Database**: crie o banco e, em **Regras**, cole o conteúdo de `firestore.rules` e publique.
4. **Seu usuário moderador** (uma vez só, à mão):
   - Authentication > Usuários > Adicionar: e-mail `seunome@mesa.local` (minúsculas) e uma senha forte. Copie o **UID**.
   - Firestore > Iniciar coleção `accounts` > ID do documento = o UID > campos `username` (texto: `seunome`) e `role` (texto: `mod`).

## 2. GitHub Pages
1. Crie um repositório e envie todos estes arquivos (incluindo a pasta `imgs`).
2. Settings > Pages > Deploy from a branch > `main` / root. O endereço aparece ali.

## 3. Uso
- Entre pelo botão no canto superior direito. Como moderador: **Editar** em cada página (título, texto, capa, quem vê) e **Conta > Jogadores** para criar contas.
- **Imagens**: em Conta > Imagens informe `usuario/repositorio` e um token do GitHub com acesso só a este repositório (Contents: leitura e escrita). O token fica só no seu aparelho. O site redimensiona a foto, envia para `imgs/` e ela aparece após o GitHub Pages republicar (cerca de 1 minuto).
- Repositório público = imagens públicas. Não coloque segredo em imagem.
- Jogadores trocam nome de exibição, senha e anotações sozinhos. Se alguém esquecer a senha: apague o usuário em Authentication e recrie na aba Jogadores.
