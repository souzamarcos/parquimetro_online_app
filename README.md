# Aplicativo do Parquímetro Online

## Como rodar o projeto?
Baixe o projeto na pasta de sua preferência e entre neste diretório através do prompt de comando do windows.
```
cd <DIRETÓRIO>
```

Execute os seguintes comandos para baixar todas as bibliotecas do projeto:
```
npm install
```

Para rodar o projeto em Android, abra o simulador do Android Studio ou conecte o celular(Android) via usb com depuração automática ativada. Em seguida execute o comando: 
```
react-native run-android
```

Utilize um dos usuários de teste abaixo. O aplicativo funciona de forma diferente para cada um deles.

-Usuário motorista (paga o parquímetro)
```
e-mail: marcos@teste.com.br
senha: 123456
```

-Usuário guarda (controla os pagamentos)
```
e-mail: marcosguarda@teste.com.br
senha: 123456
```

Caso utilize o celular para rodar o aplicativo você pode abrir uma nova janela do prompt de comando e executar os seguintes códigos durante o tempo que o aplicativo está rodando:

- Exibir menu de configuração do modo de depuração
```
adb shell input keyevent 82
```

- Atualizar o aplicativo com as últimas alterações dos arquivos. Caso alguma biblioteca seja inserida é necessário cancelar a execução do aplicativo e rodar o projeto novamente.
```
adb shell input keyevent 46 46
```


Se der erro de .MainActivity, executar o código:

```
adb uninstall com.appname
```
