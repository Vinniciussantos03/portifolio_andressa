# Imagens do site

Os arquivos abaixo são os que o site procura. Enquanto um deles não existir,
aparece no lugar um placeholder com a mesma proporção — o layout não quebra e
não há deslocamento de conteúdo.

| Arquivo | Onde aparece | Situação |
|---|---|---|
| `andressa.jpg` | Retrato do topo (hero) | ✅ no repositório |
| `geek-burger.jpg` | Card Geek Bunker Burger + galeria | ✅ no repositório |
| `expo-ecomm.jpg` | Card Expo Ecomm 2026 + galeria | ✅ no repositório |
| `sana.jpg` | Card SANA 2026 + galeria | ✅ no repositório |
| `milew-logo.png` | Card do projeto Milew Agency | ⬜ falta enviar |
| `cilios-deluxe.jpg` | Card Cílios Deluxe | ⬜ falta enviar |

## Proporções

O recorte é sempre pelo centro (`object-cover`), então fotos verticais de
celular funcionam bem — só evite deixar o assunto principal na borda.

- **Retrato do hero:** vertical, 3:4 (ex. 900×1200)
- **Cards de projeto:** 4:3
- **Galeria:** quadrado, 1:1
- **Logo da Milew:** exibido por inteiro, sem corte. Um PNG com fundo
  transparente fica melhor que um print da imagem completa.

## Ao acrescentar novas fotos

1. Salve o arquivo nesta pasta.
2. Comprima antes de subir, idealmente abaixo de 400 KB. As fotos atuais foram
   redimensionadas para no máximo 1400 px no maior lado e reencodadas em
   qualidade 82, o que já é suficiente para telas retina nos tamanhos em que
   elas aparecem.
3. Aponte o caminho em `src/data/content.js` — todos os caminhos de imagem
   ficam lá. Para a galeria, basta copiar o formato de um item existente; o
   carrossel se ajusta sozinho à quantidade de fotos.
