<!DOCTYPE html>
<html lang="pt-BR">
<body>

  <h1>🧪 Projeto Parabank - Testes Automatizados com Cypress</h1>
  <p>Este projeto realiza a automação de testes end-to-end utilizando <strong>Cypress</strong>, com suporte à leitura de dados de testes via arquivos <strong>YAML</strong> e execução contínua através do <strong>GitHub Actions</strong>.</p>

<h2>🚀 Recursos Principais</h2>
  <ul>
    <li>⚙️ Testes end-to-end com Cypress</li>
    <li>📁 Dados dinâmicos gerados e lidos via arquivos YAML</li>
    <li>🔐 Testes de cadastro e logout de usuário</li>
    <li>🔍 Validações automáticas de interface</li>
    <li>📸 Captura automática de screenshots em falhas</li>
  </ul>

<h2>🛠️ Tecnologias Utilizadas</h2>
  <ul>
    <li>🟩 Cypress</li>
    <li>📜 JavaScript (ES6+)</li>
    <li>📂 js-yaml (manipulação de arquivos YAML)</li>
    <li>🔄 GitHub Actions para CI</li>
  </ul>

<h2>📋 Como Executar os Testes</h2>

<h3>🖥️ Execução Local</h3>
  <p><strong>1.</strong> Clone o repositório:</p>
  <pre><code>git clone &lt;repository-url&gt;
cd parabank-cypress</code></pre>

  <p><strong>2.</strong> Instale as dependências:</p>
  <pre><code>npm install</code></pre>

  <p><strong>3.</strong> Execute os testes:</p>
  <pre><code>npx cypress open       # Modo interativo
npx cypress run        # Modo headless</code></pre>

<h3>⚙️ Configuração</h3>
  <ul>
    <li>🔗 <code>baseUrl</code>: https://parabank.parasoft.com/parabank</li>
    <li>🧾 <code>cypress/fixtures/user-data.yaml</code>: Arquivo de dados para cadastro dinâmico</li>
    <li>🗃️ <code>cypress/pages/RegisterPage.js</code>: Padrão Page Object para o formulário de cadastro</li>
  </ul>

<h2>📦 Estrutura do Projeto</h2>
  <pre><code>├── cypress/
│   ├── e2e/
│   │   └── specs/
│   │       └── registro-logout.cy.js
│   ├── fixtures/
│   │   └── user-data.yaml
│   ├── pages/
│   │   └── RegistroPage.js
│   └── support/
│       └── commands.js
├── .github/
│   └── workflows/
│       └── tests-ci.yml
├── cypress.config.js
├── package.json
└── README.md</code></pre>

<h2>🧪 Casos de Teste Implementados</h2>
  <ul>
    <li>📝 Cadastro dinâmico de novo usuário</li>
    <li>🚪 Logout após registro</li>
    <li>📂 Armazenamento de dados de teste via YAML</li>
    <li>🔎 Verificação de elementos de boas-vindas</li>
  </ul>

<h2>🔄 Integração Contínua</h2>
  <p>Os testes são executados automaticamente via <strong>GitHub Actions</strong> a cada push no repositório:</p>
  <pre><code>.github/workflows/cypress-tests.yml</code></pre>

<h2>📸 Relatórios e Evidências</h2>
  <ul>
    <li>🖼️ Screenshots automáticos de falhas salvos na pasta <code>cypress/screenshots</code></li>
    <li>📹 (Opcional) Vídeos na pasta <code>cypress/videos</code> se habilitado</li>
  </ul>

<h2>📌 Considerações Finais</h2>
  <ul>
    <li>✅ Código limpo com separação por responsabilidades</li>
    <li>🔁 Testes reutilizáveis com base em Page Object</li>
    <li>📖 Suporte a dados dinâmicos com YAML</li>
  </ul>

</body>
</html>
