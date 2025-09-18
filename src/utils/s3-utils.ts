/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Utility functions for handling CloudFront image URLs
 */

const CLOUDFRONT_BASE_URL = 'https://d3qyzk1t4w1lja.cloudfront.net/Images';

/**
 * Generates a full CloudFront URL for an image
 * @param imageName - The name of the image file
 * @returns Full CloudFront URL for the image
 */
export function getS3ImageUrl(imageName: string): string {
  if (!imageName) return '';

  // If it's already a full URL, return as is
  if (imageName.startsWith('http')) {
    return imageName;
  }

  return `${CLOUDFRONT_BASE_URL}/${imageName}`;
}

/**
 * Generates CloudFront URLs for an array of image names
 * @param imageNames - Array of image file names
 * @returns Array of full CloudFront URLs
 */
export function getS3ImageUrls(imageNames: string[]): string[] {
  return imageNames.map(getS3ImageUrl).filter((url) => url !== '');
}

/**
 * Updates project data to use CloudFront URLs
 * @param project - Project object with imageUrl and images array
 * @returns Project object with CloudFront URLs
 */
export function updateProjectWithS3Urls(project: any) {
  return {
    ...project,
    imageUrl: getS3ImageUrl(project.imageUrl),
    images: getS3ImageUrls(project.images || []),
  };
}

export default {
  getS3ImageUrl,
  getS3ImageUrls,
  updateProjectWithS3Urls,
  CLOUDFRONT_BASE_URL,
};
