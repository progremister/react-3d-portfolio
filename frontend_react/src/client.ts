import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'v70aah8z',
    dataset: 'production',
    apiVersion: '2023-02-07',
    useCdn: true,
    token: 'skpoSYgzkDQlzl7PKYFHQ9AT3iuAmj7doNx4XTsMDep5QGf3ohVPpPLUhFKSTf6IOVW4ZuUHnLtZ6zp4hG3Ux1Kb702UpO1km5Y0l1uZhOqcqQZHs0D5RZ25kzWUbBrslX4wU0UI7LZubsQlS4dymrafQSL94khSUbFif7O1m4fS1BY49AVS'
});

const builder = imageUrlBuilder(client);

export const urlFor: any = (source: string) => builder.image(source);

// const clientConfig: ClientConfig = {
//     projectId: 'xhj8ghog'!,
//     dataset: 'production',
//     apiVersion: '2023-05-23',
//     useCdn: true,
//     token: 'skpqohUR6z7d7jipT1lsWUvl7oT897lCUiVv1h77ycShAI5MgcUKWObkEFo90xn4huXsfoK19EjkQbAuGpVplqaYPEPgJIC0TSEsM0d1joJ1cZFfGpJpvM6XLlzFEoNzQdmN3C1GXbcXuhhdmJmxuk5qg26HzE0aABQp3QYiZZvTXPliVgBE'!
// };

// export const client: SanityClient = createClient(clientConfig);

// const builder = imageUrlBuilder(client);

// export const urlFor: any = (source: string) => builder.image(source);