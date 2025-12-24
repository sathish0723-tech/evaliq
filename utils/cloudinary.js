/**
 * Build Cloudinary image URL
 * @param {string} imageId - The public ID of the image in Cloudinary
 * @param {object} options - Transformation options
 * @returns {string} Cloudinary URL
 */
export function getCloudinaryImageUrl(imageId, options = {}) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'difauucm4';
  
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  // Build transformation string
  const transformations = [];
  
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.crop) transformations.push(`c_${options.crop}`);
  if (options.format) transformations.push(`f_${options.format}`);
  if (options.quality) transformations.push(`q_${options.quality}`);
  
  // Default to auto format and quality if not specified
  if (!options.format) transformations.push('f_auto');
  if (!options.quality) transformations.push('q_auto');
  
  const transformationString = transformations.length > 0 
    ? transformations.join(',') + '/' 
    : '';
  
  return `${baseUrl}/${transformationString}${imageId}`;
}

