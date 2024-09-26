Roteamento
Quando você tem um fluxo reutilizando páginas, como é o caso das páginas de validação de PIN e criação de senha , o roteamento pode refletir o propósito da página, mas também deve ser genérico o suficiente para atender a diferentes fluxos (como registro e primeiro acesso ).

Exemplo de Roteamento
Primeiro Acesso

/first-access/pin
/first-access/criar-senha
Registro (Inscreva-se)

/registro/pin
/registro/criar-senha
O importante aqui é que, embora as páginas de PIN e criação de senha sejam as mesmas, elas fazem parte de fluxos diferentes . O roteamento acima reflete essa diferença de contexto, mas internamente a lógica da página pode ser compartilhada. A página pode receber informações via URL ou estado global para saber se há fluxo de registro ou primeiro acesso, por exemplo.
