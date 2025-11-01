# Como fazer deploy na Vercel

## Passos para Deploy

### 1. Build Local (Opcional - para testar)
Execute este comando para testar o build localmente:
```bash
npm run build
```

### 2. Configuração da Vercel

O projeto já está configurado com:
- ✅ `vercel.json` - Configuração de rotas
- ✅ `api/index.ts` - Entry point serverless para a Vercel

### 3. Deploy via Vercel Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta
3. Clique em "Add New Project"
4. Importe seu repositório do GitHub/GitLab
5. Configure as seguintes opções:
   - **Framework Preset**: Vite
   - **Build Command**: `vite build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

6. Clique em "Deploy"

### 4. Deploy via CLI (Alternativa)

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy (produção)
vercel --prod
```

## Solução de Problemas

### Erro 404: NOT_FOUND

Este erro geralmente acontece quando:
- O build não foi executado corretamente
- Os arquivos não estão no diretório correto

**Solução**: 
1. Verifique se a build command está configurada como `vite build`
2. Verifique se o output directory está configurado como `dist/public`
3. Nas configurações do projeto na Vercel, vá em:
   - Settings → General → Build & Development Settings
   - Certifique-se que está usando as configurações acima

### Variáveis de Ambiente

Se você precisar de variáveis de ambiente (ex: DATABASE_URL), adicione em:
- Vercel Dashboard → Your Project → Settings → Environment Variables

## Estrutura do Projeto

```
.
├── api/
│   └── index.ts          # Entry point serverless para Vercel
├── client/
│   └── src/              # Código fonte React
├── server/
│   └── index.ts          # Server local (não usado na Vercel)
├── dist/
│   └── public/           # Build do cliente (gerado automaticamente)
└── vercel.json           # Configuração da Vercel
```

## Notas Importantes

- A Vercel executa o build automaticamente
- O código em `api/index.ts` serve os arquivos estáticos buildados
- Para desenvolvimento local, continue usando `npm run dev`
- Para produção na Vercel, use a configuração acima
