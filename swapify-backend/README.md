# Instrucciones para levantar el servidor

1. Clonar el repositorio
2. Instalar dependecias 
```
npm i
```
3. Clonar .env.template tres veces y renombrarlas a `.env.development` `.env.production` `.env.test` y completar las variables de entorno
4. Levantar la base de datos
```
docker compose up -d
```
5. Generar el Prisma client
```
npx prisma generate
```
6. Ejecutar proyecto 
```
`npm run start:dev`
```
7. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v1/seed
```