// lib/fetchDrupalContent.ts
import { ISite } from '../../types/sites';

export interface ContentNode {
  nid: string;
  title: string;
  created: string;
  status: string;
  type: string;
  body: string;
}

export const constructEndpointUrl = (baseUrl: string): string | null => {
  try {
    let url = baseUrl;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }
    url = url.replace(/\/$/, '');
    return `${url}/api/bulk-export`;
  } catch (error) {
    console.error('Error constructing endpoint URL:', error);
    return null;
  }
};

export const fetchDrupalContent = async (site: ISite): Promise<ContentNode[]> => {
  if (!site?.site_url) throw new Error('No site URL provided');

  const endpointUrl = constructEndpointUrl(site.site_url);
  if (!endpointUrl) throw new Error('Invalid site URL');

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  if (!apiBaseUrl) {
    console.error("CRITICAL: REACT_APP_API_BASE_URL is not defined.");
    throw new Error("Application configuration error: API endpoint is missing.");
  }

  const firebaseFunctionUrl = `${apiBaseUrl}/drupal7/structure?endpoint=${encodeURIComponent(endpointUrl)}`;
  const response = await fetch(firebaseFunctionUrl);

  if (!response.ok) {
    throw new Error(`Server returned ${response.status}: ${response.statusText}`);
  }

  const result = await response.json();
  return result.structure || [];
};
