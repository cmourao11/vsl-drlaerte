# Configuração do Google Sheets

Para conectar o formulário com sua planilha do Google Sheets, siga estes passos:

## 1. Criar o Google Apps Script

1. Abra sua planilha: https://docs.google.com/spreadsheets/d/1-sYBY83_m25QYo08kVBXsCy85MA7cSeV5jC0JAMkFv8/edit
2. Clique em **Extensões** > **Apps Script**
3. Cole o código abaixo:

\`\`\`javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Adicionar cabeçalhos se for a primeira linha
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data/Hora', 'WhatsApp', 'Nome', 'Área de Atuação']);
    }
    
    // Adicionar os dados
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('pt-BR'),
      data.whatsapp,
      data.nome,
      data.atuacao
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
\`\`\`

4. Clique em **Salvar** (ícone de disquete)
5. Clique em **Implantar** > **Nova implantação**
6. Clique no ícone de engrenagem e selecione **Aplicativo da Web**
7. Configure:
   - **Descrição**: Formulário Executivo Digital
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
8. Clique em **Implantar**
9. **Copie a URL do aplicativo da Web** (será algo como: https://script.google.com/macros/s/...)

## 2. Adicionar a URL no projeto

1. Na v0, vá em **Vars** (variáveis de ambiente) no sidebar
2. Adicione uma nova variável:
   - Nome: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - Valor: Cole a URL copiada do Apps Script

## 3. Testar

Após configurar, teste o formulário. Os dados devem aparecer automaticamente na planilha!
