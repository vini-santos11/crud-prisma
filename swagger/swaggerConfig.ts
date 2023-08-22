import swaggerAutogen from 'swagger-autogen';

export const generateSwaggerDocs = async () => {
  const outputFile: string = './../src/swagger_output.json';
  const endpointsFiles: string[] = ['./../src/routes/index.ts'];

  const swaggerGenerator = swaggerAutogen();
  await swaggerGenerator(outputFile, endpointsFiles);
};
