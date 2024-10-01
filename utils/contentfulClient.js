import { createClient } from 'contentful';

let client;

try {
  client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
  });
} catch (error) {
  console.error('Error creating Contentful client:', error);
}

export default client;