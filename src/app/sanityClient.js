import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '3r58cz83', // Replace with your Sanity project ID
  dataset: 'production',     // Replace with your dataset name
  apiVersion: '2023-01-01',    // Use a recent date for your API version
  token: 'skDI0iZUfolJzJvQpl2fQNc3Ajc9JmP8KOiuLC7lpTu9KCS9Y6Sun8yzuSFUD1fk4LJB4xZEyog6kWYYV8v7UIKZMFeFG2HQkbStlVwf2uE3jXhwZbsDBo1KmvJpihzO3NmNmywXCTxmMXCXTurkREhZkhRYb7dNLzdtSIKv1rSXbWIM6Wmq',   // Replace with your API token
  useCdn: false,               // Disable CDN for write operations
});

export default client;
