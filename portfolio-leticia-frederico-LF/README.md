# Portfólio — Desenvolvimento Web & Marketing Digital

Projeto inicial de portfólio feito com HTML, CSS e JavaScript puro.

## Arquivos
- `index.html`: conteúdo e estrutura do site.
- `style.css`: identidade visual, layout e responsividade.
- `script.js`: menu mobile e personalização dos links de contato/projeto.

## Antes de publicar
Abra `script.js` e edite o objeto `CONFIG`:
- `nome`: nome profissional que aparecerá no site.
- `whatsapp`: número com código do país e DDD, somente números. Ex.: `5511999999999`.
- `email`: seu e-mail profissional.
- `auraUrl`: link publicado da landing page Aura Estética.

Também revise o texto da seção "Sobre mim" e os serviços para refletirem exatamente o que você oferece.

## Testar localmente
Abra `index.html` no navegador. Para uma experiência melhor, use a extensão Live Server do VS Code.

## Publicar na Vercel
1. Crie um repositório no GitHub, por exemplo `meu-portfolio`.
2. Envie `index.html`, `style.css`, `script.js` e este README para a raiz do repositório.
3. Entre em https://vercel.com e conecte sua conta GitHub.
4. Selecione `Add New` > `Project` e importe `meu-portfolio`.
5. Como é um site estático, não precisa de build command. Deixe o diretório raiz como `./` e publique.
6. A Vercel fornecerá um endereço `.vercel.app`.

## Observação
A seção Aura Estética está identificada como projeto autoral/demonstrativo. Adicione o link real quando a página estiver publicada. Não apresente projetos demonstrativos como trabalhos contratados por clientes.


## Personalização já aplicada
- Nome: Letícia Frederico
- E-mail: leticiafrederico599@gmail.com

### Falta confirmar o WhatsApp
O número enviado (`1194773372`) tem 10 dígitos, mas para gerar o link de WhatsApp corretamente preciso do número completo. No `script.js`, preencha `whatsapp` com DDI + DDD + número, somente números. Exemplo fictício: `5511999999999`.
