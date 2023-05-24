import {createClient, ClientConfig, SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const clientConfig: ClientConfig = {
    projectId: 'xhj8ghog'!,
    dataset: 'production',
    apiVersion: '2023-05-23',
    useCdn: true,
    token: 'skpqohUR6z7d7jipT1lsWUvl7oT897lCUiVv1h77ycShAI5MgcUKWObkEFo90xn4huXsfoK19EjkQbAuGpVplqaYPEPgJIC0TSEsM0d1joJ1cZFfGpJpvM6XLlzFEoNzQdmN3C1GXbcXuhhdmJmxuk5qg26HzE0aABQp3QYiZZvTXPliVgBE'!
};

export const client: SanityClient = createClient(clientConfig);

const builder = imageUrlBuilder(client);

export const urlFor: any = (source: string) => builder.image(source);