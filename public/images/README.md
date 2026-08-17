# Imagens do site

Salve os arquivos nesta pasta usando **exatamente** os nomes abaixo. O site
já procura por eles — enquanto o arquivo não existir, aparece um placeholder
elegante em rosa quartzo no lugar (o layout não quebra).

| Arquivo | Onde aparece | Proporção ideal |
|---|---|---|
| `andressa.jpg` | Retrato do topo (hero) | vertical, 3:4 (ex. 900×1200) |
| `milew-logo.png` | Card do projeto Milew Agency | qualquer (exibida inteira, sem corte) |
| `geek-burger.jpg` | Card Geek Bunker Burger + galeria | horizontal ou vertical, 4:3 |
| `expo-ecomm.jpg` | Card Expo Ecomm 2026 + galeria | horizontal ou vertical, 4:3 |
| `sana.jpg` | Card SANA 2026 + galeria | horizontal ou vertical, 4:3 |
| `cilios-deluxe.jpg` | Card Cílios Deluxe | horizontal ou vertical, 4:3 |
| `bastidores-01.jpg` | Quarta foto da galeria | quadrada, 1:1 |

## Observações

- Fotos verticais de celular funcionam bem: o site recorta pelo centro
  (`object-cover`) sem distorcer a imagem.
- O logo da Milew é exibido por inteiro com respiro em volta, então um PNG
  com fundo transparente fica melhor que um print da imagem completa.
- Para trocar, renomear ou acrescentar imagens, edite
  `src/data/content.js` — todos os caminhos ficam lá.
- Comprima as fotos antes de subir (idealmente abaixo de 400 KB cada) para
  o site carregar rápido.
